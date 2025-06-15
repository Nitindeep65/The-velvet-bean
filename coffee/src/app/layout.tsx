import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/app/components/Providers"; // ✅ Use the Providers wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Velvet Bean",
  description: "Curated experiences & services, powered by elegance and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#faf8f5] text-gray-900 pt-20 dark:bg-[#1a1a1a] dark:text-white`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
