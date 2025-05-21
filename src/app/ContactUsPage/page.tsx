"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import contact from "@/assets/contact-1.png";
import ArrowIcon from "@/assets/arrow-right.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactUsPage = () => {
  return (
    <div>
      <section className="pt-24 md:pt-8 pb-0 md:-mt-28 bg-gradient-to-b from-white to-[#87CEEB] overflow-x-clip">
        <div className="container  max-w-[1200px] mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Contact Us
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                At Guruom Dental Clinic, we combine advanced technology with a personalized approach to provide high-quality dental care in a safe and comfortable environment. Whether you are visiting for a routine check-up or a complex dental procedure, our experienced team is committed to restoring and enhancing your smile with precision and care.
              </p>
              <div className="flex gap-1 items-center mt-[30px]">
                <a href="/#"><button className="btn btn-primary"> Shop Now </button></a>
                <button className="btn btn-text gap-2 font-semibold">
                  <Link href="/#service"><span>Our Services</span></Link>
                  {/* <img src={ArrowIcon} alt="Arrow Right" className="h-5 w-5" /> */}
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>

            </div>

            <div className="mt-20 md:mt-0 md:h-[800px] md:flex-1 relative md:left-10 top-10">
              <Image
                src={contact}
                width={1400}
                height={800}
                alt="Contact Us"
                className="md:absolute md:h-[65%] md:w-auto md:max-w-none md:left-6 md:top-16 lg:left-0"
                priority
              />
            </div>
          </div>
        </div>
      </section>



      {/* Inquiry Form */}
      <section id="inquiryform" className="py-12 bg-gradient-to-t from-[#b4d1f7] to-[#FFFFFF] flex justify-center items-center">
        <div className="container max-w-[800px] mx-auto px-6 bg-white shadow-xl rounded-xl p-10 border-gray-1000">
          <h2 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Inquiry Form
          </h2>
          <p className="text-center text-lg text-gray-600 mt-4">
            Have any questions? Fill out the form below and we&apos;ll get back to you soon.
          </p>
          <form className="mt-12 space-y-8">
            <input type="tel" placeholder="Name" className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm transition duration-200" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Email" className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm transition duration-200" />
              <input type="email" placeholder="Contact Number" className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm transition duration-200" />
            </div>
            <textarea
              placeholder="Message"
              className="p-4 border border-gray-300 rounded-lg w-full h-40 focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm transition duration-200"
            ></textarea>
            <div className="flex justify-center">
              <button type="submit" className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Support Section */}
      {/* <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#d5eaf2]">
        <div className="container max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Support Section
          </h2>
          <p className="text-lg text-[#020D3E] mt-4">
            For questions related to products, shipping, or orders, visit our{" "}
            <Link href="/#" className="text-blue-500 hover:underline">
              Support page
            </Link>
            .
          </p>
        </div>
      </section> */}

      

    </div>
  );
};

export default ContactUsPage;