import { FaMugHot, FaLeaf, FaRecycle } from "react-icons/fa";

const services = [
  {
    icon: <FaMugHot className="text-4xl text-[#4b2e2e] dark:text-[#e6d3c4]" />,
    title: "Artisan Coffee",
    desc: "Brewed to perfection with ethically sourced beans. From espresso to pour-over, enjoy coffee crafted by passionate baristas.",
  },
  {
    icon: <FaLeaf className="text-4xl text-[#4b2e2e] dark:text-[#e6d3c4]" />,
    title: "Nature Lounge",
    desc: "Relax in an atmosphere wrapped in greenery. Comfortable seating, ambient music, and indoor plants make every visit refreshing.",
  },
  {
    icon: <FaRecycle className="text-4xl text-[#4b2e2e] dark:text-[#e6d3c4]" />,
    title: "Sustainable Products",
    desc: "Shop local crafts, eco-goods, reusable coffee cups, and plant pots. Supporting the planet, one purchase at a time.",
  },
];

export default function Services() {
  return (
    <section
      className="py-20 bg-[#fdfaf6] dark:bg-[#121212] px-6 transition-colors duration-300"
      role="region"
      aria-label="Services"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#4b2e2e] dark:text-[#f0e7df] mb-10">
          Our Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              role="article"
              aria-label={service.title}
            >
              <div className="mb-4">{service.icon}</div>
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
