"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiShoppingCart, FiLogOut, FiUser } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useSession, signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const isOnProductsPage = pathname === "/products";
  const isLoggedIn = !!session;

  const navLinks = [
    { name: "Home", href: "/Coffee" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Maintenance Banner */}
      <div className="fixed top-0 left-0 right-0 w-full bg-yellow-100 text-yellow-900 text-xs sm:text-sm text-center py-2 px-3 font-medium shadow z-[60] dark:bg-yellow-900 dark:text-yellow-100">
    🚧 The Velvet Bean is currently under maintenance. Some features may be temporarily unavailable.
  </div>

      <header
        className={`fixed top-[40px] sm:top-[32px] left-0 right-0 z-50 transition-shadow ${
          scrolled ? "shadow-md" : ""
        } bg-white dark:bg-[#1a1a1a] dark:text-white`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
          {/* Logo */}
          <Link href="/" className="text-xl sm:text-2xl font-bold text-[#4b2e2e] dark:text-[#f0e7df]">
            The Velvet Bean
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#6b3e3e] dark:text-white dark:hover:text-[#e0cfcf] transition"
              >
                {link.name}
              </Link>
            ))}

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

            {/* Auth Section */}
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#4b2e2e] dark:text-[#f0e7df]">
                  Hello, {session.user?.name?.split(" ")[0]}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-sm text-red-500 hover:text-red-700 flex items-center"
                >
                  <FiLogOut className="mr-1" /> Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => router.push("/Signup")}
                className="flex items-center gap-1 px-4 py-1.5 text-sm text-white bg-[#4b2e2e] hover:bg-[#6b3e3e] rounded-full transition"
              >
                <FiUser /> Login / Signup
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="transition-all duration-300">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-[#1a1a1a] px-6 py-4 space-y-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-[#6b3e3e] dark:text-white dark:hover:text-[#e0cfcf]"
              >
                {link.name}
              </Link>
            ))}

            {isLoggedIn && isOnProductsPage && (
              <Link
                href="/cart"
                className="block text-gray-700 hover:text-[#6b3e3e] dark:text-white dark:hover:text-[#e0cfcf] flex items-center"
              >
                <FiShoppingCart className="mr-2" /> Cart ({cart.length})
              </Link>
            )}

            {isLoggedIn ? (
              <div className="pt-2 border-t text-sm space-y-2 text-[#4b2e2e] dark:text-[#f0e7df]">
                <div>Hello, {session.user?.name?.split(" ")[0]}</div>
                <button
                  onClick={() => signOut()}
                  className="flex items-center text-red-500 hover:text-red-700"
                >
                  <FiLogOut className="mr-2" /> Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => router.push("/Signup")}
                className="w-full flex items-center justify-center gap-2 bg-[#4b2e2e] text-white py-2 rounded-full hover:bg-[#6b3e3e] transition"
              >
                <FiUser /> Login / Signup
              </button>
            )}
          </div>
        )}
      </header>
    </>
  );
}
