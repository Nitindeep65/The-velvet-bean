"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus(`❌ ${data.error || "Failed to send message."}`);
    }
  };

  return (
    <section className="py-20 bg-[#fdf8f2] dark:bg-[#1a1a1a] px-6 text-[#4b2e2e] dark:text-[#f3f3f3]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-10">
          Have a question or want to collaborate? Let’s connect.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-4 rounded border border-gray-300 dark:border-gray-700 dark:bg-[#2a2a2a] dark:placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="p-4 rounded border border-gray-300 dark:border-gray-700 dark:bg-[#2a2a2a] dark:placeholder-gray-400"
          />
          <textarea
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="md:col-span-2 p-4 rounded border border-gray-300 h-32 dark:border-gray-700 dark:bg-[#2a2a2a] dark:placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-[#4b2e2e] text-white px-6 py-3 rounded hover:bg-[#3a2424] dark:bg-[#8b5e3c] dark:hover:bg-[#6e462c]"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-sm font-medium">{status}</p>}
      </div>
    </section>
  );
}
