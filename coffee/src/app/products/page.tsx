import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/data/products";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#f5f2ee] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#4b2e2e] mb-10">
          Explore Our Signature Coffee Range
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description} id={0}            />
          ))}
        </div>
      </div>
    </div>
  );
}
