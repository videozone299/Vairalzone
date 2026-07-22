import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Viral Zone Video",
  description: "ভাইরাল ভিডিও শেয়ার করুন - Viral Zone",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className={`${inter.variable} antialiased bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
