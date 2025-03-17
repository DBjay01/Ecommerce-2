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
        className="relative pt-16 pb-24 bg-gradient-to-b from-white to-[#87CEEB] overflow-hidden"
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
                <Link href="/#services">
                  <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Learn More About Our Services
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative lg:w-[45%] flex justify-center ml-12">
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
                To revolutionize the dental industry by providing world-class,
                innovative dental care and solutions that improve patient
                outcomes and the quality of dental practices.
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
                We are committed to delivering exceptional dental services,
                superior materials, and cutting-edge equipment to ensure that
                every patient receives the best care, and every clinic operates
                at the highest standard of excellence.
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

      {/* Certifications & Achievements */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center text-white">
        {/* Diagonal Wave Separator */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-800 to-transparent transform -skew-y-6"></div>

        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-5xl font-bold text-yellow-400 tracking-wide mb-16">
            Certifications & Achievements
          </h2>

          {/* Floating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Achievement 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative bg-gray-800/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 flex items-center space-x-4 border border-gray-700 hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:border-yellow-400"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-black text-3xl font-bold rounded-full shadow-lg"></div>
              <p className="text-xl font-semibold text-gray-200">
                ISO Certified Dental Labs (2020)
              </p>
            </motion.div>

            {/* Achievement 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative bg-gray-800/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 flex items-center space-x-4 border border-gray-700 hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:border-yellow-400"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-black text-3xl font-bold rounded-full shadow-lg">
                🎖
              </div>
              <p className="text-xl font-semibold text-gray-200">
                Pune&apos;s Most Innovative Dental Service Provider (2022)
              </p>
            </motion.div>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:flex items-start">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black mb-4">
              GurOm Dental
              </h2>
              <p className="text-lg text-gray-700 mb-2">
                Visit us at our main office on JM Road, <br></br> Shivajinagar,
                Pune - 411045
              </p>
              <p className="text-lg text-gray-700 mb-2">
                Contact No: +91 12345 67890
              </p>
              <p className="text-lg text-gray-700 mb-2">
                Email:{" "}
                <a
                  href="mailto:sketchitup.official@gmail.com"
                  className="text-blue-500"
                >
                  info@guromdental.com{" "}
                </a>
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black mb-4">
                Our Location
              </h2>
              <div className="w-[80%] h-64">
                <iframe
                  src="https://maps.google.com/maps?q=Row%20House%20No.%20D3,%20Ahilyadevi%20society,%20Baner,%20Pune%20-%20411045&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
