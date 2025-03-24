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
            Get in touch Today
          </h2>
          <p className="section-description mt-4 md:mt-6 text-sm md:text-base text-gray-700">
            Celebrate the joy of accomplishment of the success we will create
            together with your support
          </p>
          <Image
            src={starImage}
            alt="Star Image"
            width={300}
            className="hidden md:block absolute -left-[350px] -top-[137px]"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-10 justify-center">
          {/* Add any buttons or call-to-action elements here */}
        </div>
      </div>

      {/* Company Details and Location */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:flex items-start">
            {/* Company Details */}
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-black mb-4">
                GurOm Dental
              </h2>
              <p className="text-sm md:text-lg text-gray-700 mb-2">
                A403, Bhairavnath Complex, Pune Saswad Road, Opposite SP
                Infocity, Bhekrai Nagar, Hadapsar, Pune, Maharashtra 412308,
                India
              </p>
              <p className="text-sm md:text-lg text-gray-700 mb-2">
                Contact No: +91 12345 67890
              </p>
              <p className="text-sm md:text-lg text-gray-700 mb-2">
                Email:{" "}
                <a
                  href="mailto:sketchitup.official@gmail.com"
                  className="text-blue-500"
                >
                  shopsdental@gmail.com
                </a>
              </p>
            </div>

            {/* Location Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-black mb-4">
                Our Location
              </h2>
              <div className="w-full md:w-[80%] h-64 rounded-md">
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
        </div>
      </section>
    </section>
  );
};