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
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading"}> 
          <ProductList categoryId={process.env.FEATURED_CATEGORY_ID!}
          limit={8} 
           />
        </Suspense>
      </div>

      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">Categories</h1>
        <h5 className="text-s pl-4 px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64  mb-12" >Swipe right to see more</h5>
        <Suspense fallback={"loading"}> 
          <CategoriesList /> 
        </Suspense>
      </div>
      
      <Overview/>
      <HomeServices/>
      <HomeShop/>
      <HomeCallToAction/>
    </div>
  );
}

export default HomePage;