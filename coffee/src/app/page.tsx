"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/Signup"); // 🔁 Change this to your actual first page (e.g., /signup)
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#faf8f5] dark:bg-[#121212] flex items-center justify-center px-4">
      <div className="text-center animate-fadeInUp opacity-0 animate-delay-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4b2e2e] dark:text-[#e6cbb3] tracking-wide">
          The Velvet Bean
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-medium">
          Curated coffee experiences crafted with elegance.
        </p>
      </div>
    </div>
  );
}
