// "use client"

import CategoriesList from "@/components/CategoriesList";
import { HomeCallToAction } from "@/components/HomeCallToAction";
import { HomeHero } from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import HomeShop from "@/components/HomeShop";
import Overview from "@/components/Overview";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";
import { Suspense, useContext, useEffect } from "react";

const HomePage = async () => {
  // const WixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await WixClient.products.queryProducts().find();
  //     console.log(res);
  //     };

  //     getProducts();

  // }, [WixClient]);

  // const WixClient = await wixClientServer();

  // const res = await WixClient.products.queryProducts().find();
  // console.log(res);

  return (
    <div className="">
      {/* <section id="home">     <HomeHero ></HomeHero>   </section> */}
      <Slider />

      <div className="mt-24">
        <Suspense fallback={"loading"}>
          <CategoriesList />
        </Suspense>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="flex justify-center text-2xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Shop Now
        </h1>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_CATEGORY_ID!}
            limit={8}
          />
        </Suspense>

        {/* All Products Section */}
        <div className="mt-12 flex justify-center">
          <Link href="/list?cat=all-products">
            <button className="mt-4 w-fit bg-red-600 hover:bg-red-700 text-white text-sm md:text-base px-4 py-2 rounded">
              All Products
            </button>
          </Link>
        </div>
      </div>
      {/* <Overview/> */}
      <HomeServices />
      {/* <HomeShop/> */}
      <HomeCallToAction />
    </div>
  );
};

export default HomePage;
