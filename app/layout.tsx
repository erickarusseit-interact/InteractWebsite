import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./(componenten)/Navbar";

//alles was ich hier ändere wird an alle Seiten angewendet

const Font = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

const headline = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});


export const metadata = {
  title: "Interact Web App",
  description: "Wir wissen andere raten. Wir entwickeln Webapps und Websites mit perspektive und Wirkung. Von der Poistionoerung bis zum fertigen Produkt."
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-neutral-950" lang="en">
      <body
        className={`${Font.variable} ${headline.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}  
        
        <footer className="">© 2025 Interact Web App</footer>
      </body>
    </html>
  );
}

