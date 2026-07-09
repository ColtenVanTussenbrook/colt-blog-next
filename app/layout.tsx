import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { DM_Sans } from 'next/font/google';
import Navbar from './components/navbar';
import SocialIcons from './components/social-icons';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: '600'
});

export const metadata: Metadata = {
  title: 'Colten Van Tussenbrook Portfolio',
  description: 'Software engineering portfolio for Colten Van Tussenbrook. Built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-ink text-bone`}>
        <div className="relative px-12 py-6 lg:px-72 lg:py-24 flex flex-col gap-8">
          <Navbar />
          {children}
          <SocialIcons />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
