"use client";

import Image from "next/image";
// import aboutImage from "/public/about-banner.png";
import aboutImage from "@/assets/about-banner.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
// import {Certifications} from "@/sections/Certifications";

const AboutUsPage = () => {
  const aboutRef = useRef(null);

  return (
    <div>
      {/* About Section */}
      <section
        ref={aboutRef}
        className="relative pt-24 md:pt-16 pb-24 bg-gradient-to-b from-white to-[#87CEEB] overflow-hidden"
      >
        <div className="container -mt-8 mx-auto px-6 lg:px-16">
          <div className="md:flex items-center justify-end">
            {/* LEFT CONTENT */}
            <div className="lg:w-[55%] space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
                About GurOm Dental
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in 2019, GurOm Dental has rapidly grown into a
                comprehensive dental solutions provider, catering to clinics,
                labs, and dental professionals across India. Our goal is to
                bring innovation and excellence to every aspect of dental care 
                from clinic services to materials and equipment.
              </p>
              {/* CTA BUTTONS */}
              <div className="flex gap-4 mt-6">
                <Link href="/ServicesPage">
                  <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Learn More About Our Services
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative lg:w-[45%] flex justify-center ml-12 mt-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative w-[450px] md:w-[600px]"
              >
                <Image
                  src={aboutImage}
                  alt="About Us Image"
                  width={400}
                  height={400}
                  className="drop-shadow-lg rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-8 shadow-xl rounded-lg"
            >
              <h2 className="text-4xl font-bold text-blue-600">Our Vision</h2>
              <p className="text-lg text-gray-700 mt-4">
                Shaping the Future of Dentistry — With Quality, Care, and Innovation.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-white p-8 shadow-xl rounded-lg"
            >
              <h2 className="text-4xl font-bold text-blue-600">Our Mission</h2>
              <p className="text-lg text-gray-700 mt-4">
                What began as a modest operation has grown into one of the leading dental product outsourcing hubs across the state — driven by quality, trust, and commitment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Our team includes experienced dental professionals, skilled lab
            technicians, and cutting-edge engineers dedicated to developing the
            best dental solutions available. From our clinicians to our material
            experts, we ensure every aspect of our service reflects our
            commitment to quality.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {["Clinicians", "Lab Technicians", "Material Experts"].map(
              (role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 group-hover:text-blue-900">
                    {role}
                  </h3>
                  <p className="text-gray-600 mt-3 sm:mt-4">
                    Dedicated specialists ensuring excellence in every aspect of
                    our dental solutions.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>


      {/* <section className="py-24 bg-blue-500 text-white text-center">
                <div className="container mx-auto px-6 lg:px-16">
                    <h2 className="text-4xl font-bold">Get in Touch</h2>
                    <p className="text-lg mt-4 max-w-2xl mx-auto">
                        Have questions? Want to collaborate? Reach out to us and let's build the future of dental care together.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-6"
                    >
                        <Link href="/contact">
                            <button className="px-8 py-3 text-lg font-semibold bg-white text-blue-600 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section> */}

      {/* Company Details and Location */}
{/* Company Details and Location */}
<section className="py-8 px-12 md:py-16 bg-white">
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
                Contact No: +91 90904 14106
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

    </div>
  );
};

export default AboutUsPage;
