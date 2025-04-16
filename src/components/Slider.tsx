"use client";

import { useEffect, useState } from "react";
import { Box, Star, Layers, Sparkles, BadgeCheck, Tag} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/banner_2.jpg"; // Replace with your Gingifast image
import img2 from "@/assets/banner_3.jpg";
import img3 from "@/assets/banner_6.jpg";

const slides = [
  {
    id: 1,
    title: "Precision Dental Tools",
    description: "Advanced care for a healthier smile!",
    img: img1, // Update this to your Gingifast banner image
    url: "/list?cat=all-products",
    bg: "bg-gradient-to-r from-pink-50 to-white",
  },
  {
    id: 2,
    title: "High-Precision Dental Handpieces",
    description: "Smooth, precise, and reliable for every procedure!",
    img: img2,
    url: "/list?cat=all-products",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Orthodontic Instruments",
    description: "Sterilized. Reliable. Ready for Every Dental Procedure!",
    img: img3,
    url: "/list?cat=all-products",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative mt-32 mx-6 md:mx-20 rounded-lg h-[40vh] md:h-[45vh] lg:h-[55vh] overflow-hidden">
        <div
          className="w-max h-full flex transition-all ease-in-out duration-1000"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {slides.map((slide) => (
            <div
              className={`${slide.bg} w-screen h-full flex flex-row items-center`}
              key={slide.id}
            >
              {/* LEFT TEXT CONTENT */}
              <div className="w-1/2 flex flex-col ml-6 justify-center px-6 gap-2">
                <h2 className="text-lg md:text-2xl lg:text-3xl text-gray-700 font-medium">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg lg:text-xl text-gray-600">
                  {slide.description}
                </p>
                <Link href={slide.url}>
                  <button className="mt-4 w-fit bg-red-600 hover:bg-red-700 text-white text-sm md:text-base px-4 py-2 rounded">
                    SHOP NOW
                  </button>
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-1/2 h-full relative p-4">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  sizes="50vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* DOT NAVIGATION */}
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""
                }`}
              onClick={() => setCurrent(index)}
            >
              {current === index && (
                <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden sm:flex bg-blue-100 rounded-xl px-6 py-4 mt-6 mx-10 flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-medium text-gray-800">
        <div className="flex items-center gap-2">
          <Box className="w-6 h-6 text-gray-900 flex-shrink-0" />
          <span>200+ Products</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-gray-900 flex-shrink-0" />
          <span>40+ Brands</span>
        </div>
        <div className="flex items-center gap-2">
          <BadgeCheck className="w-6 h-6 text-gray-900 flex-shrink-0" />
          <span>100% Original</span>
        </div>
        <div className="flex items-center gap-2">
          <Tag className="w-6 h-6 text-gray-900 flex-shrink-0" />
          <span>Best price</span>
        </div>
      </div>

    </>
  );
};

export default Slider;
