"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DentalClinicsImg from "@/assets/service-banner.png";
import DentalServicesSection from "@/components/DentalServicesSection";
import HomeServices from "@/components/HomeServices";

const ServicesPage = () => {
  return (
    <div className="pt-24 md:pt-6">

      {/* <section className="pt-8 -mt-10 pb-20 bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#87CEEB,_#FFFFFF_90%)] overflow-x-clip">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Our Dental Services
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
             At Guruom Dental, we offer a full spectrum of dental services — from manufacturing high-quality dental materials to providing expert dental lab work and clinical care. With a dedicated team of professionals, we ensure precision, quality, and reliability in everything we do.
             </p>
              <div className="flex gap-1 items-center pt-10">
            <a href="#services"><button className="btn btn-primary"> Our Services </button></a>
          </div>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <Image
                src={DentalClinicsImg}
                alt="Dental Clinics"
                className="md:absolute md:h-[65%] md:w-auto md:max-w-none md:left-6 md:top-16 lg:left-20"
              />
            </div>
          </div>
          
        </div>
      </section> */}

      <HomeServices/>
      <section id="services"><DentalServicesSection/></section>

    </div>
  );
};

export default ServicesPage;