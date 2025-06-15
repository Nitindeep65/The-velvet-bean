"use client";
import React from "react";
import { useCart } from "@/context/CartContext";

type Props = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

export default function ProductCard({ id, name, price, image, description }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, description });
  };

  return (
    <div className="bg-white dark:bg-[#1f1f1f] rounded-2xl shadow-lg p-4 hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {description}
        </p>
        <div className="mt-3 text-lg font-bold text-[#4b2e2e] dark:text-[#ffdab9]">
          {price}
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-[#4b2e2e] text-white py-2 rounded-xl hover:bg-[#3c1e1e] dark:hover:bg-[#2e1414]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
