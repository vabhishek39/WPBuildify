import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'WPbuildify | Modern Web Design Agency',
  description: 'Sleek, futuristic, and professional web design services for startups and businesses.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-50 font-sans antialiased selection:bg-teal-500/30 selection:text-teal-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
