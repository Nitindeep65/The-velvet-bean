"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiShoppingCart, FiLogOut } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const { data: session } = useSession();
  const pathname = usePathname();

  const isOnProductsPage = pathname === "/products";
  const isLoggedIn = !!session;

  const navLinks = [
    { name: "Home", href: "/Coffee" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-50 dark:bg-[#1a1a1a] dark:text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-[#4b2e2e] dark:text-[#f0e7df]">
          The Velvet Bean
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[#6b3e3e] dark:text-white dark:hover:text-[#e0cfcf] transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Cart Icon */}
          {isLoggedIn && isOnProductsPage && (
            <Link href="/cart" className="relative">
              <FiShoppingCart size={22} className="text-[#4b2e2e] dark:text-white" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          )}

          {/* User Info and Logout */}
          {isLoggedIn && (
            <div className="flex items-center space-x-4">
              <span className="font-medium text-[#4b2e2e] dark:text-[#f0e7df]">
                Hello, {session.user?.name?.split(" ")[0]}
              </span>
              <button
                onClick={() => signOut()}
                className="text-sm text-red-500 hover:text-red-700 flex items-center"
              >
                <FiLogOut className="mr-1" /> Logout
              </button>
            </div>
          )}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#1a1a1a] border-t px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#6b3e3e] dark:text-white dark:hover:text-[#e0cfcf]"
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn && isOnProductsPage && (
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#6b3e3e] dark:text-white dark:hover:text-[#e0cfcf] flex items-center"
            >
              <FiShoppingCart className="mr-2" /> Cart ({cart.length})
            </Link>
          )}

          {isLoggedIn && (
            <div className="pt-2 border-t text-sm space-y-2 text-[#4b2e2e] dark:text-[#f0e7df]">
              <div>Hello, {session.user?.name?.split(" ")[0]}</div>
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="flex items-center text-red-500 hover:text-red-700"
              >
                <FiLogOut className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
