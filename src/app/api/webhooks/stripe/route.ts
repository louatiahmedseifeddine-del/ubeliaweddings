import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY!)

const PRODUCT_FILES: Record<string, { name: string; url: string }> = {
  'price_1TQjxaF4tvR5vOt3JJ2k14b5': {
    name: 'The Complete Wedding Guide by Ubelia',
    url: 'https://ubeliaweddings.com/downloads/DownloadPageebook.pdf',
  },
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    return NextResponse.json({ error: 'Webhook signature invalid' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const customerEmail = session.customer_details?.email
    const customerName = session.customer_details?.name?.split(' ')[0] || 'there'

    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      expand: ['data.price'],
    })

    for (const item of lineItems.data) {
      const priceId = item.price?.id
      const product = priceId ? PRODUCT_FILES[priceId] : null

      if (product && customerEmail) {
        await resend.emails.send({
          from: 'Ubelia <bonjour@ubeliaweddings.com>',
          to: customerEmail,
          subject: `Your Ubelia Wedding Guide is ready ✨`,
          html: emailTemplate(customerName, product.name, product.url),
        })
      }
    }
  }

  return NextResponse.json({ received: true })
}

function emailTemplate(name: string, productName: string, downloadUrl: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Georgia', serif; background: #faf9f7; margin: 0; padding: 0; }
    .container { max-width: 560px; margin: 40px auto; background: #fff; padding: 48px; }
    .logo { text-align: center; font-size: 24px; letter-spacing: 4px; color: #B59354; margin-bottom: 40px; }
    h1 { font-size: 22px; color: #2c2c2a; font-weight: normal; margin-bottom: 16px; }
    p { font-size: 15px; color: #5f5e5a; line-height: 1.7; margin-bottom: 16px; }
    .btn { display: inline-block; margin: 24px 0; padding: 16px 40px; background: #B59354; color: #fff; text-decoration: none; font-size: 14px; letter-spacing: 2px; }
    .divider { border: none; border-top: 1px solid #f1efe8; margin: 32px 0; }
    .footer { margin-top: 48px; font-size: 12px; color: #b4b2a9; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">UBELIA</div>
    <h1>Thank you ${name} ✨</h1>
    <p>Your purchase is confirmed. Your copy of <strong>${productName}</strong> is ready to download.</p>
    <p>
      <a href="${downloadUrl}" class="btn">DOWNLOAD MY GUIDE</a>
    </p>
    <hr class="divider"/>
    <p>The link is available for 7 days. If you have any questions, simply reply to this email.</p>
    <div class="footer">
      Ubelia · Luxury Wedding Essentials<br/>
      <a href="https://ubeliaweddings.com" style="color:#B59354;">ubeliaweddings.com</a>
    </div>
  </div>
</body>
</html>
  `
}
