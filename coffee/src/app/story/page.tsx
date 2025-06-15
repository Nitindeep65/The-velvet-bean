"use client";

import { motion } from "framer-motion";

export default function StoryPage() {
  return (
    <section className="bg-[#fff8f0] dark:bg-[#1a1a1a] text-[#4b2e2e] dark:text-[#f0e7df] py-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center"
        >
          The Story Behind <span className="italic">The Velvet Bean</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg leading-relaxed"
        >
          It started with a simple moment — a cold winter evening, a steaming cup of
          freshly brewed coffee, and a quiet realization: cafes were no longer just
          about coffee. They were about *connection*, *comfort*, and *conscious living*.
          That’s when the seed of <strong>The Velvet Bean</strong> was planted.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg leading-relaxed"
        >
          Founded by two childhood friends — Meera, an interior designer, and Arjun, a
          third-generation coffee roaster — the idea was to blend craftsmanship and
          consciousness. They envisioned a place where people could slow down, sip
          something warm, and be surrounded by nature-inspired calm.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/01.jpg"
            alt="Founders and original cafe setup"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg leading-relaxed"
        >
          Every piece of the café was chosen with care — reclaimed wood for tables, clay
          planters made by local artisans, and eco-friendly lighting. The signature drink,
          <em>Velvet Mocha</em>, is a tribute to Arjun’s grandmother who introduced him to
          the velvet bean plant — believed to boost mood and energy naturally.
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="italic text-xl border-l-4 border-[#4b2e2e] pl-4 text-[#6b3e3e] dark:text-[#e0cfcf]"
        >
          “We didn’t just want to serve coffee; we wanted to serve peace in a cup.”
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg leading-relaxed"
        >
          Over time, *The Velvet Bean* grew into a community hub — with wellness
          workshops, book readings, weekend live music, and a retail corner with
          sustainable, handpicked products. What began as a warm thought became a living,
          breathing space filled with stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="text-center mt-10"
        >
          <p className="text-2xl font-semibold">
            The journey continues — one soulful sip at a time. 🌱
          </p>
        </motion.div>
      </div>
    </section>
  );
}
