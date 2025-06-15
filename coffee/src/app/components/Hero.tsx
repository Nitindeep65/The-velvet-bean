 "use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/images/bg.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          The Velvet Bean
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 drop-shadow">
          Where artisan coffee meets soulful ambiance — curated with love and nature.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            className="bg-white text-[#4b2e2e] px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition"
            onClick={() => router.push("/about")}
          >
            Explore Our Story
          </button>

          <button
            onClick={() => router.push("/Signup")}
            className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-6 py-3 font-semibold rounded-full hover:bg-white hover:text-[#4b2e2e] transition-all duration-300"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
