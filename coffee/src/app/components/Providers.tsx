"use client";

import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "./Navbar";
import ChatWidget from "./ChatWidget";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
  <SessionProvider>
  <CartProvider>
    <Navbar />
    <main className="min-h-screen">{children}</main>

    {/* 👇 Chatbot always present */}
    <ChatWidget />
  </CartProvider>
</SessionProvider>

  );
}
