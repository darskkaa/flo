import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { TrustBeacon } from "@/components/trust-beacon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FloPro Pools | Marine-Grade Asset Management",
  description: "The only pool service engineered for PGI Canals and North Port families. Stop salt corrosion and verify gate safety with FloPro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <JsonLd />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <TrustBeacon />
      </body>
    </html>
  );
}
