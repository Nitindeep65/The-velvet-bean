const services = [
  {
    title: "Artisan Coffee",
    desc: "Brewed to perfection with ethically sourced beans.",
  },
  {
    title: "Nature Lounge",
    desc: "Relax in an atmosphere wrapped in greenery.",
  },
  {
    title: "Sustainable Products",
    desc: "Shop local crafts, eco-goods, and plant pots.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#fdfaf6] dark:bg-[#121212] px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#4b2e2e] dark:text-[#f0e7df] mb-10">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#4b2e2e] dark:text-[#e6d3c4] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
