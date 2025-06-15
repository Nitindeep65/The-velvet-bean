const testimonials = [
  {
    name: "Riya Sharma",
    quote: "A soulful place to unwind — every cup tells a story.",
  },
  {
    name: "Arjun Mehta",
    quote: "Love the eco-friendly vibe and warm interiors!",
  },
  {
    name: "Sana Khan",
    quote: "A hidden gem. I keep coming back for the ambiance.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#f6f2eb] dark:bg-[#121212] text-[#4b2e2e] dark:text-[#f0e7df] px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e1e1e] text-[#4b2e2e] dark:text-[#f4eade] p-6 rounded-xl shadow-md border border-[#e6dcd2] dark:border-[#2f2f2f] transition-all duration-300"
            >
              <p className="italic mb-4 text-gray-700 dark:text-gray-300">“{t.quote}”</p>
              <p className="font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
