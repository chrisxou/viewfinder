import type { Metadata } from "next";
import { Geist, DM_Sans } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["200"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veil",
  description: "A minimal photography and video portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
