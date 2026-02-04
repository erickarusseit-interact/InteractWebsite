import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CardNav from './(componenten)/Navbar';

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
  description: "Wir wissen andere raten. Wir entwickeln Webapps und Websites mit perspektive und Wirkung. Von der Poistionoerung bis zum fertigen Produkt.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
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
        <CardNav
          logo="/images/Logo-80x80.svg"
          logoAlt="Interact Logo"
          items={[
            {
              label: "Marktforschung",
              bgColor: "oklch(71.4% 0.203 305.504)",
              textColor: "black",
              links: [
                { label: "Leistungen", href: "/#leistungen", ariaLabel: "Marktforschung Leistungen" },
                { label: "FAQ", href: "/#faq", ariaLabel: "FAQ" }
              ]
            },

            {
              label: "UX Design", 
              bgColor: "oklch(75% 0.183 55.934)",
              textColor: "#black",
              links: [
                { label: "Leistungen", href: "/#leistungen", ariaLabel: "Leistungen" },
                { label: "Arbeitsweise", href: "/#ablauf", ariaLabel: "FAQ" }
              ]
            },
            {
              label: "Web Entwicklung",
              bgColor: "oklch(70.7% 0.165 254.624)", 
              textColor: "#Black",
              links: [
                { label: "Leistungen", href: "/#leistungen", ariaLabel: "Leistungen" },
                { label: "Arbeitsweise", href: "/#ablauf", ariaLabel: "Arbeitsweise" },
                { label: "Techstack", href: "/#techstack", ariaLabel: "Techstack" }
              ]
            },

            /*
              label: "Infos",
              bgColor: "oklch(71.4% 0.203 305.504)",
              textColor: "black",
              links: [
                { label: "Karriere", href: "/about", ariaLabel: "Marktforschung Leistungen" },
                { label: "Team", href: "/careers", ariaLabel: "Marktforschung Ablauf" },
                { label: "Geschichte", href: "/careers", ariaLabel: "Marktforschung Ablauf" },
                { label: "Blog", href: "/careers", ariaLabel: "Marktforschung Ablauf" }
              ]
            */
          ]}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
        {children}  
        
        <footer className=""> 2025 Interact Web App</footer>
      </body>
    </html>
  );
}

