"use client";

import starImage from "@/assets/images/star.png";
import springimage from "@/assets/spring.png";
import Image from "next/image";
import Link from "next/link";

export const HomeCallToAction = () => {
  return (
    <section className="bg-white py-12 md:py-24 overflow-x-clip px-4 md:px-24">
      <div className="container">
        <div className="section-heading relative items-center text-center">
          <h2 className="section-title text-2xl md:text-4xl font-bold">
          Our Location
          </h2>
                    
        </div>

      </div>

      {/* Company Details and Location */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:flex justify-center">
            {/* Company Details */}
            

            {/* Location Section */}

            
              <div className=" w-96 h-80 rounded-md ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8575171259367!2d73.94665347450604!3d18.490112070105244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9e2ea054583%3A0x27d1e1d4e804f634!2sBhairavnath%20Complex!5e0!3m2!1sen!2sin!4v1742299125969!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>

            </div>
          </div>
        </div>
      </section>
    </section>
  );
};