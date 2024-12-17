import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


const montserrat = Montserrat ({
  weight: ['200', '400', '500', '700'],
  subsets: ['latin'],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Hacking BLOG",
  description: "Blog para compartilhamento de conhecimentos sobre hacking e segurança da informação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${montserrat.className}`} lang="pt-br">
      <head>
        <meta name='viewport' content='width=device-width, initial-content=1.0' />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
