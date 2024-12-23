import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const montserrat = Montserrat({
  weight: ['200', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Hacking BLOG',
  description:
    // eslint-disable-next-line max-len
    'Blog para compartilhamento de conhecimentos sobre hacking e segurança da informação.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${montserrat.className} antialiased`} lang="pt-br">
      <head>
        {/* <meta name="next-size-adjust" content="100%" /> */}
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
