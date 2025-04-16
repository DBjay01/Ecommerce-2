"use client";

import starImage from "@/assets/images/star.png";
import springimage from "@/assets/spring.png";
import { maxHeaderSize } from "http";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";


export const HomeCallToAction = () => {
  return (
    // <section className="bg-white py-12 md:py-24 overflow-x-clip px-4 md:px-24">
    //   <div className="container">
    //     <div className="section-heading relative items-center text-center">
    //       <h2 className="section-title text-2xl md:text-4xl font-bold">
    //       Our Location
    //       </h2>

    //     </div>

    //   </div>

    //   Company Details and Location
    //   <section className="py-8 md:py-16 bg-white">
    //     <div className="container mx-auto px-4">
    //       <div className="md:flex justify-center">
    //         Company Details


    //         Location Section


    //           <div className=" w-96 h-80 rounded-md ">
    //             <iframe
    //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8575171259367!2d73.94665347450604!3d18.490112070105244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9e2ea054583%3A0x27d1e1d4e804f634!2sBhairavnath%20Complex!5e0!3m2!1sen!2sin!4v1742299125969!5m2!1sen!2sin"
    //               width="100%"
    //               height="100%"
    //               frameBorder="0"
    //               style={{ border: 0 }}
    //               allowFullScreen
    //               aria-hidden="false"
    //               tabIndex={0}
    //             ></iframe>

    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </section>

    <section className="bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-24 px-4 md:px-24 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10">
          Our Location
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
          {/* Contact Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-left">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Get in Touch</h3>

            <div className="flex items-start gap-4 mb-5">
              <MapPin className="text-lama w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-sm leading-relaxed">
                A403, Bhairavnath Complex, Pune Saswad Road, Opposite SP Infocity,
                Bhekrai Nagar, Hadapsar, Pune&nbsp;–&nbsp;412308, Maharashtra, India
              </p>
            </div>

            <div className="flex items-start gap-4 mb-5">
              <Mail className="text-lama w-5 h-5 flex-shrink-0 mt-0.5" />
              <a
                href="mailto:contact@company.com"
                className="text-gray-700 hover:text-lama transition text-sm break-all"
              >
                shopsdental@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-lama w-5 h-5 flex-shrink-0 mt-0.5" />
              <a
                href="tel:+919876543210"
                className="text-gray-700 hover:text-lama transition text-sm"
              >
                +91 90904 14106
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full max-w-xl h-[320px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8575171259367!2d73.94665347450604!3d18.490112070105244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9e2ea054583%3A0x27d1e1d4e804f634!2sBhairavnath%20Complex!5e0!3m2!1sen!2sin!4v1742299125969!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>



  );
};