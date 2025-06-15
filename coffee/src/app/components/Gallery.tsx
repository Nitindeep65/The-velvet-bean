const images = [
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/plant1.jpg",
  "/images/plant2.jpg",
  "/images/outdoor.jpg",
];

export default function Gallery() {
  return (
    <section className="py-16 px-6 bg-[#ffffff] dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#4b2e2e] dark:text-[#f5e9dc] mb-8">
          Our Space
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 border border-[#eee] dark:border-[#2a2a2a]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
