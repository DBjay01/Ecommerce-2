"use client";

import { useEffect, useState } from "react";
import { Box, Star, Layers, Sparkles, BadgeCheck, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/banner_2.jpg";
import img2 from "@/assets/banner_3.jpg";
import img3 from "@/assets/banner_6.jpg";
import DentalClinicImg from "@/assets/Dental_Clinics_a1.jpg";
import DentalLabImg from "@/assets/Dental_Lab_a1.jpg";
import DentalMaterialImg from "@/assets/Dental_Material_a1.jpg";
import DentalEquipmentImg from "@/assets/Dental_Equipment_Manufacturing_a1.jpg";

const slides = [
  {
    id: 1,
    title: "Dental Material Trading",
    description: "We supply top-quality dental materials, ensuring clinics and labs have everything needed for seamless operations.",
    img: DentalMaterialImg,
    url: "/ServicesPage",
    bg: "bg-gradient-to-r from-pink-50 to-white",
  },
  {
    id: 2,
    title: "Dental Lab",
    description: "At GurOm Dental Lab, crafting custom crowns, bridges, and dentures. Partner with us for high-quality prosthetic solutions.",
    img: DentalLabImg,
    url: "/ServicesPage",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Dental Clinics",
    description: "GurOm Dental Clinics offer advanced technology and expert care for all ages. we ensure a personalized, comfortable experience.",
    img: DentalClinicImg,
    url: "/ServicesPage",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 3,
    title: "Dental Equipment Manufacturing",
    description: "Our engineers develop cutting-edge dental equipment, providing reliable solutions to enhance patient care.",
    img: DentalEquipmentImg,
    url: "/ServicesPage",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="relative mt-32  md:mx-20 rounded-lg h-[25vh] md:h-[45vh] lg:h-[55vh] overflow-hidden">
        {/* SLIDES */}
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
                <h2 className="text-lg md:text-2xl lg:text-3xl text-blue-800 font-medium">
                  {slide.title}
                </h2>
                <p className="text-sm hidden md:block md:text-lg lg:text-xl text-gray-600">
                  {slide.description}
                </p>
                <Link href={slide.url}>
                  <button className="mt-4 w-fit bg-blue-300 hover:bg-blue-700 text-black text-sm md:text-base px-4 py-2 rounded">
                    Explore More
                  </button>
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-1/2 h-full relative p-4 rounded-xl">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  sizes="50vw"
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* DOT NAVIGATION */}
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
                current === index ? "scale-150" : ""
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

      {/* ADDITIONAL INFO */}
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