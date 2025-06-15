"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Custom Signup (local)", form);
    // You can handle local signup logic here
  };

  const handleSocialLogin = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: "/Coffee", // 👈 Redirect to homepage after login
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#faf8f5] dark:bg-[#1a1a1a] px-4 py-10 transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-[#262626] shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-[#4b2e2e] dark:text-[#f0e7df] mb-6 text-center">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-[#fefefe] dark:bg-[#333] text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-[#4b2e2e] focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-[#fefefe] dark:bg-[#333] text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-[#4b2e2e] focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-[#fefefe] dark:bg-[#333] text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-[#4b2e2e] focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-[#4b2e2e] text-white py-2 rounded-md hover:bg-[#3a2323] transition"
          >
            Sign Up
          </button>
        </form>

        <div className="my-6 text-center text-gray-500 dark:text-gray-400">or continue with</div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleSocialLogin("google")}
            className="flex items-center justify-center gap-3 w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#333] transition text-gray-800 dark:text-white"
          >
            <FaGoogle className="text-red-500" />
            Sign in with Google
          </button>
          <button
            onClick={() => handleSocialLogin("github")}
            className="flex items-center justify-center gap-3 w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#333] transition text-gray-800 dark:text-white"
          >
            <FaGithub />
            Sign in with GitHub
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-[#4b2e2e] dark:text-[#e6cbb3] hover:underline font-medium">
            Log in
          </a>
        </p>
      </div>
    </section>
  );
}
