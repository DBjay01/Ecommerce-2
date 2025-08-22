import React from "react";
import Link from "next/link";

const GurOmDenteczPage = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-14 px-6 bg-gradient-to-t from-orange-500 to-orange-300">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          GuruOm Dentecz
        </h1>
        <p className="text-white text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          High-performance dental equipment engineered with precision, durability,
          and innovation for exceptional patient care.
        </p>
      </header>

      {/* Main Content Card */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-8 border border-orange-100">
          {/* About Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              About GuruOm Dentecz
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At GuruOm Dentecz, we manufacture high-performance dental equipment
              that empowers clinics, hospitals, and dental professionals to deliver
              exceptional patient care.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our commitment goes beyond simply creating products; we combine
              advanced engineering, durable materials, and strict quality control
              to ensure every piece of equipment is not just built to last but
              also optimized for peak performance.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This meticulous approach allows us to provide reliable tools that
              dental experts can depend on day in and day out, ultimately
              contributing to a higher standard of care for patients.
            </p>
          </section>

          {/* Why Choose Us Section */}
          {/* <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              Why Choose GuruOm Dentecz?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Cutting-edge engineering and innovation</li>
              <li>Durable materials ensuring long-lasting performance</li>
              <li>Strict quality control at every stage</li>
              <li>Equipment optimized for clinical efficiency</li>
              <li>Trusted by clinics, hospitals, and dental professionals</li>
              <li>Reliable tools supporting better patient care</li>
            </ul>
          </section> */}

          {/* Call to Action */}
          <section className="text-center">
            <p className="text-gray-700 max-w-2xl mx-auto">
              Looking for high-quality dental equipment you can rely on? Get in
              touch with us today for more details.
            </p>
            <Link href="/ContactUsPage">
              <button className="mt-6 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-lg shadow-lg transition">
                Contact GuruOm Dentecz
              </button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default GurOmDenteczPage;
