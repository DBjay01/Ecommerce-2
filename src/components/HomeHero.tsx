"use client"

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/images/Hero_Banner_1.png";
import banner from "@/assets/images/Hero_Banner_a1.png"
import overviewImage from "@/assets/images/overview.png"; // Add the new image here
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";
import { useRef } from "react";

export const HomeHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  return (
    <div>
    <section
      ref={heroRef}
      className="pt-8 md:pt-5 md:pb-2 bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#87CEEB,_#FFFFFF_90%)] overflow-x-clip"
    >
      <div className="container ">
        <div className="md:flex items-center ">
          <div className="md:w-[478px]">
            <div className="tag">
              Mastering Dental Excellence
            </div>
            <h1 className="text-4xl md:text-6xl py-2 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Welcome to GurOm Dental
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Your trusted partner in dental solutions. From advanced dental care to premium dental materials and equipment, we are here to bring excellence to your clinic and beyond.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <a href="/#"><button className="btn btn-primary"> Shop Now </button></a>
              <button className="btn btn-text gap-1">
                <Link href="/#service"><span>Our Services</span></Link>
                <ArrowIcon className="h-5 w-5"></ArrowIcon>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[550px] md:flex-1 relative">
            <motion.img
              src={banner.src}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-right-32 lg:left-50"
              animate={{
                translateY: [-10, 10]
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 8,
                ease: "easeInOut",
              }}
            ></motion.img>
          </div>
        </div>

        {/* New Section */}
        {/* <div className="md:flex items-center mt-20">
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="Overview Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:left-2 lg:left-50"
            />
          </div>
          <div className="md:w-[478px]">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Brief Overview
            </h2>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              GurOm Dental is a multifaceted dental solutions provider based in Pune. From world-class dental clinics and dental labs to premium dental materials trading and innovative equipment manufacturing, we are dedicated to delivering comprehensive, high-quality solutions for dental professionals and patients alike.
            </p>
          </div>
        </div> */}

      </div>
    </section>
     <section>
     <div>
        <div className="max-w-[850px] mt-20 mx-auto ">
          <h2 className="text-center  text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Transforming Dental Care with <b>GurOm Dental</b> :
          Clinics, Labs, Premium Materials, and Cutting-Edge Equipment
          </h2>
          <p className="text-center my-5 text-[22px] leading-[30px] tracking-tight text-[#020D3E]">
          GurOm Dental is a multifaceted dental solutions provider based in Pune. From world-class 
dental clinics and dental labs to premium dental materials trading and innovative 
equipment manufacturing, we are dedicated to delivering comprehensive, high-quality 
solutions for dental professionals and patients alike. </p>

          <div className="flex justify-center">
            <div className="tag">Experience the Future of Dentistry with Us!</div>
          </div>
        </div>
      </div>
      </section>     
    </div>
  );
};