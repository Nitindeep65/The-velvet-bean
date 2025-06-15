export default function About() {
  return (
    <section
      className="py-20 px-6 bg-[#fff8f0] dark:bg-[#1a1a1a] text-[#4b2e2e] dark:text-[#f0e7df] transition-colors duration-300"
      role="region"
      aria-label="About The Velvet Bean"
    >
      <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
          About The Velvet Bean
        </h2>
        <p className="text-md mb-2 text-[#7a5656] dark:text-[#cbbab1] uppercase tracking-wide">
          Where Coffee Meets Calm
        </p>
        <p className="text-lg leading-relaxed text-[#5b3b3b] dark:text-[#d6c7bd] mt-4">
          The Velvet Bean is more than a café — it’s a handcrafted experience.
          Inspired by nature and nurtured by a passion for detail, we blend
          modern elegance with rustic charm. Every element here — from the
          coffee to the ambiance — is chosen with care, creating soulful
          moments that linger long after your last sip.
        </p>
      </div>
    </section>
  );
}
