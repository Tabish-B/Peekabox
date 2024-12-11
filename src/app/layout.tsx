import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Peekabox - Web Info",
  description: "Discover how Peekabox reduces food waste and connects businesses to sustainable solutions.",
  keywords: ["food waste", "sustainability", "business solution", "Peekabox", "TGTG model"],
  openGraph: {
    type: 'website',
    url: 'https://peekabox.com',
    title: 'Peekabox - Web Info',
    description: 'Discover sustainable business solutions with Peekabox',
    //images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peekabox - Web Info',
    description: 'Discover sustainable business solutions with Peekabox',
    //images: '/images/og-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-lato antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}