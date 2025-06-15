export default function ServicesPage() {
  const services = [
    {
      title: "Artisan Coffee",
      image: "/images/111.webp",
      desc: "Enjoy hand-brewed coffee crafted with ethically sourced beans, roasted to perfection.",
    },
    {
      title: "Nature Lounge",
      image: "/images/112.jpg",
      desc: "Relax in a cozy space filled with greenery, soft music, and warm lighting.",
    },
    {
      title: "Work Pods",
      image: "/images/113.jpg",
      desc: "Quiet and comfortable workspaces with free Wi-Fi and endless coffee refills.",
    },
    {
      title: "Eco-Friendly Store",
      image: "/images/114.jpg",
      desc: "Shop handmade crafts, reusable goods, sustainable home décor, and more.",
    },
    {
      title: "Workshops & Events",
      image: "/images/115.jpeg",
      desc: "Join our art, pottery, and brewing workshops — or book the space for your own event.",
    },
    {
      title: "Pet-Friendly Corners",
      image: "/images/116.jpeg",
      desc: "Bring your furry friend — we’ve got treats and a cozy spot for them too!",
    },
  ];

  return (
    <main className="min-h-screen py-20 px-6 bg-[#fdfaf6] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-[#4b2e2e] dark:text-[#f5e9dc] mb-14">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-[#f0e8dc] dark:border-[#2d2d2d]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#4b2e2e] dark:text-[#f0e7df] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-md leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
