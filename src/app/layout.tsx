import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/layout/LenisProvider';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ubelia — The Complete Wedding Planning System',
  description:
    'Plan your wedding without the overwhelm. 96+ page guide, budget tracker, and digital invitation. Used by 11,209+ couples. Instant download.',
  openGraph: {
    title: 'Ubelia — The Complete Wedding Planning System',
    description: 'One guide. One method. Zero overwhelm. Used by 11,209+ couples worldwide.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} min-h-screen flex flex-col`}>
        <LenisProvider>
          <AnnouncementBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
