import type { Metadata } from "next";
import { Alata, Josefin_Sans } from "next/font/google";
import "./globals.scss";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

const alata = Alata({
  weight: "400",
  variable: "--font-alata",
});

const josefinSans = Josefin_Sans({
  weight: "300",
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Loopstudios Landing Page Challenge",
  description: "Loopstudios Landing Page Challenge",
};

const links = ["About", "Careers", "Events", "Products", "Support"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alata.variable} ${josefinSans.variable}`}>
        <Header links={links} />
        {children}
        <Footer links={links} />
      </body>
    </html>
  );
}
