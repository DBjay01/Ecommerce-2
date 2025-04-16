import React, { Suspense } from "react";
import Image from "next/image";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar"; // Import the SearchBar component
import img1 from "@/assets/service-home1.png";
import { wixClientServer } from "@/lib/wixClientServer";
import {
  Truck,
  Home,
  RotateCcw,
  Headphones,
} from "lucide-react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const WixClient = await wixClientServer();
  const cat = await WixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  console.log(cat);
  console.log(searchParams);

  return (
    <div className="px-4 pt-20 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* SearchBar for Mobile */}
      <div className="block md:hidden py-10 mt-4">
        <SearchBar />
      </div>

      {/* Campaign */}
      {/* <div className="bg-pink-50 px-4 flex justify-between items-center h-52 sm:h-64 md:h-72 lg:h-64">
        Text Section
        <div className="w-1/2 flex h-full">
          <div className="flex flex-col justify-center items-center gap-3 sm:gap-5 md:gap-8">
            <h1 className="text-base  sm:text-xl md:text-2xl lg:text-4xl font-semibold leading-tight sm:leading-[32px] md:leading-[40px] lg:leading-[48px] text-gray-700">
              Grab up to 50% - 70% off on Selected Products
            </h1>
            <button className="rounded-3xl bg-lama text-white py-2 px-4 sm:py-3 sm:px-5 text-xs sm:text-sm w-max">
              Buy Now
            </button>
          </div>
        </div>

        Image Section
        <div className="relative w-1/2 h-40 sm:h-56 md:h-64 lg:h-full">
          <Image src={img1} alt="Offer" fill className="object-contain" />
        </div>
      </div> */}

      <div className="bg-pink-50 px-4 py-4 sm:py-6 flex flex-col sm:flex-row justify-around items-center gap-4 rounded-xl shadow-md">
        {/* Free Shipping */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <Truck className="w-6 h-6 text-lama mb-1.5" />
          <h3 className="text-sm font-semibold text-gray-700">Free Shipping</h3>
          <p className="text-xs text-gray-500 mt-0.5">On orders above ₹999</p>
        </div>

        {/* Doorstep Delivery */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <Home className="w-6 h-6 text-lama mb-1.5" />
          <h3 className="text-sm font-semibold text-gray-700">Doorstep Delivery</h3>
          <p className="text-xs text-gray-500 mt-0.5">Fast & secure delivery</p>
        </div>

        {/* Easy Returns */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <RotateCcw className="w-6 h-6 text-lama mb-1.5" />
          <h3 className="text-sm font-semibold text-gray-700">Easy Returns</h3>
          <p className="text-xs text-gray-500 mt-0.5">Hassle-free returns</p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <Headphones className="w-6 h-6 text-lama mb-1.5" />
          <h3 className="text-sm font-semibold text-gray-700">24/7 Support</h3>
          <p className="text-xs text-gray-500 mt-0.5">Here when you need us</p>
        </div>
      </div>



      {/* Filter */}
      {/* <Filter /> */}

      {/* Products */}

      <h1 className="flex my-10 justify-center text-2xl md:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">{cat?.collection?.name} </h1>
      <Suspense fallback={"loading"}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;