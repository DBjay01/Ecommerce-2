"use client";

import Image from "next/image";

// Sample product images
import DentalMaterialImg from "@/assets/images/product-2.jpg";
import DentalEquipmentImg from "@/assets/images/product-3.jpg";
import FeaturedProductImg from "@/assets/images/product-4.jpg";

const HomeShop = () => {
  const products = [
    {
      id: 1,
      name: "Dental Cleaning Kit",
      price: "₹2500",
      image: DentalMaterialImg,
    },
    {
      id: 2,
      name: "Advanced Dental Chair",
      price: "₹200000",
      image: DentalEquipmentImg,
    },
    {
      id: 3,
      name: "Professional Dental Tools",
      price: "₹12000",
      image: FeaturedProductImg,
    },
  ];

  return (
    <section className="py-16 bg-[#0A2540] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Pune Dental Shop
        </h2>
        <p className="text-center text-gray-300 mb-10">
          Explore high-quality dental materials and equipment at the best prices.
        </p>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ id, name, price, image }) => (
            <div
              key={id}
              className="p-6 bg-white text-black rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src={image}
                alt={name}
                width={250}
                height={250}
                className="mx-auto"
              />
              <h4 className="text-lg font-semibold mt-4 text-center">{name}</h4>
              <p className="text-gray-600 text-center">{price}</p>
              <button className="w-full mt-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 text-center">
          <a
            href="/list?cat=all-products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all"
          >
            View More Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeShop;
