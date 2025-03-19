import CategoriesList from "@/components/CategoriesList";
import { HomeCallToAction } from "@/components/HomeCallToAction";
import { HomeHero } from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import HomeShop from "@/components/HomeShop";
import Overview from "@/components/Overview";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <div className="">
      {/* <section id="home">     <HomeHero ></HomeHero>   </section> */}
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>

      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <CategoriesList /> 
      </div>
      
      <Overview/>
      <HomeServices/>
      <HomeShop/>
      <HomeCallToAction/>
    </div>
  );
}

export default HomePage;