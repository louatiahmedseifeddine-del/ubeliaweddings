import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name ?? 'there';
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://ubeliaweddings.com';

    if (customerEmail) {
      try {
        await resend.emails.send({
          from: 'Ubelia <hello@ubeliaweddings.com>',
          to: customerEmail,
          subject: 'Your Ubelia Wedding Guide is ready ✨',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </head>
              <body style="margin:0;padding:0;background:#F4F0E8;font-family:'DM Sans',sans-serif;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F0E8;padding:40px 0;">
                  <tr>
                    <td align="center">
                      <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

                        <!-- Header -->
                        <tr>
                          <td style="background:#252018;padding:32px 40px;text-align:center;">
                            <p style="margin:0;font-family:Georgia,serif;font-size:28px;font-weight:300;font-style:italic;color:#FBFAF6;letter-spacing:0.02em;">
                              Ubelia
                            </p>
                            <p style="margin:8px 0 0;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#B59354;">
                              THE COMPLETE WEDDING GUIDE
                            </p>
                          </td>
                        </tr>

                        <!-- Body -->
                        <tr>
                          <td style="padding:40px 40px 32px;">
                            <p style="margin:0 0 16px;font-size:22px;font-weight:300;color:#252018;font-family:Georgia,serif;font-style:italic;">
                              Dear ${customerName},
                            </p>
                            <p style="margin:0 0 16px;font-size:14px;font-weight:300;color:#687060;line-height:1.7;">
                              Thank you for your purchase! Your Complete Wedding Guide is ready — everything you need to plan your wedding with clarity and calm.
                            </p>
                            <p style="margin:0 0 28px;font-size:14px;font-weight:300;color:#687060;line-height:1.7;">
                              Click below to access and download your files instantly:
                            </p>

                            <!-- CTA Button -->
                            <table cellpadding="0" cellspacing="0" style="margin:0 auto 28px;">
                              <tr>
                                <td style="background:#B59354;border-radius:4px;text-align:center;">
                                  <a href="${baseUrl}/merci?session_id=${session.id}"
                                    style="display:inline-block;padding:16px 36px;font-size:12px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:#252018;text-decoration:none;">
                                    Access Your Files →
                                  </a>
                                </td>
                              </tr>
                            </table>

                            <p style="margin:0 0 8px;font-size:13px;color:#252018;font-weight:500;">What's included:</p>
                            <ul style="margin:0 0 24px;padding-left:20px;font-size:13px;color:#687060;line-height:1.9;">
                              <li>The Complete Wedding Guide (96+ page PDF)</li>
                              <li>Budget Calculator Spreadsheet (Google Sheets)</li>
                              <li>Digital Wedding Invitation Template (Canva)</li>
                            </ul>

                            <p style="margin:0;font-size:13px;font-weight:300;color:#687060;line-height:1.7;">
                              Need help? Reply to this email or contact us at
                              <a href="mailto:hello@ubeliaweddings.com" style="color:#B59354;">hello@ubeliaweddings.com</a>
                              — we reply within 24 hours.
                            </p>
                          </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                          <td style="background:#F4F0E8;padding:24px 40px;text-align:center;border-top:1px solid rgba(181,147,84,0.2);">
                            <p style="margin:0;font-size:11px;color:#B0BAA8;letter-spacing:0.05em;">
                              © ${new Date().getFullYear()} Ubelia · <a href="${baseUrl}" style="color:#B59354;text-decoration:none;">ubeliaweddings.com</a>
                            </p>
                          </td>
                        </tr>

                      </table>
                    </td>
                  </tr>
                </table>
              </body>
            </html>
          `,
        });

        console.log(`Confirmation email sent to ${customerEmail}`);
      } catch (emailErr) {
        console.error('Failed to send confirmation email:', emailErr);
      }
    }
  }

  return NextResponse.json({ received: true });
}
