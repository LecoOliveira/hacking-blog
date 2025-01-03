/* eslint-disable max-len */
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const montserrat = Montserrat({
  weight: ['200', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hackingblog.online'),
  title: 'Hacking BLOG',
  description:
    'Blog para compartilhamento de conhecimentos sobre hacking e segurança da informação.',
  openGraph: {
    title: 'Hacking BLOG',
    description:
      'Blog para compartilhamento de conhecimentos sobre hacking e segurança da informação.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Hacking BLOG',
    images: '/opengraph-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hacking BLOG',
    description:
      'Blog para compartilhamento de conhecimentos sobre hacking e segurança da informação.',
    creator: 'Alex Rocha',
    images: '/twitter-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${montserrat.className} antialiased`} lang="pt-br">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3434178867561403" />
        <GoogleAnalytics />
        {/* <meta name="next-size-adjust" content="100%" /> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="viewport"
          content="width=device-width, initial-content=1.0, 
          maximum-scale=1.0,user-scalable=0"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
