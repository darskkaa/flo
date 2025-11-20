import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { TrustBeacon } from "@/components/trust-beacon";
import { SplashScreen } from "@/components/splash-screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FloPro Pools | Pool Care & Maintenance in Port Charlotte, FL",
  description: "Professional pool cleaning, maintenance, and repair services in Port Charlotte, Punta Gorda, North Port, and Englewood. Starting at $99/month.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <JsonLd />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashScreen />
        <Navbar />
        {children}
        <Footer />
        <TrustBeacon />
      </body>
    </html>
  );
}
