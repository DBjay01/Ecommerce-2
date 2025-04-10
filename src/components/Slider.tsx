"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/banner_2.jpg";
import img2 from "@/assets/banner_3.jpg";
import img3 from "@/assets/banner_6.jpg";

// Local image sources
const slides = [
    {
        id: 1,
        title: "Precision Dental Tools",
        description: "Advanced care for a healthier smile!",
        img: img1, // Local image
        url: "/list",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "High-Precision Dental Handpieces",
        description: "Smooth, precise, and reliable for every procedure!",
        img: img2, // Local image
        url: "/list",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Orthodontic Instruments",
        description: "Sterilized. Reliable. Ready for Every Dental Procedure!",
        img: img3, // Local image
        url: "/list",
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
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] 2xl:h-[90vh] overflow-hidden">
            <div
                className="w-max h-full flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div
                        className={`${slide.bg} w-screen h-full flex flex-row`}
                        key={slide.id}
                    >
                        {/* TEXT CONTAINER */}
                        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-6 text-center p-4">
                            <h2 className="text-sm md:text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h1 className="text-2xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className="rounded-md bg-black text-white py-2 px-4 text-sm md:text-base">
                                    SHOP NOW
                                </button>
                            </Link>
                        </div>
    
                        {/* IMAGE CONTAINER */}
                        <div className="w-1/2 h-full relative">
                            <Image
                                src={slide.img}
                                alt={slide.title}
                                fill
                                sizes="50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
    
            <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((slide, index) => (
                    <div
                        className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""
                            }`}
                        key={slide.id}
                        onClick={() => setCurrent(index)}
                    >
                        {current === index && (
                            <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
