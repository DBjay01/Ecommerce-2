import React from "react";
import Link from "next/link";

const GurOmDentalClinicsPage = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-14 px-6 bg-gradient-to-t from-orange-500 to-orange-300">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          GuruOm Dental Clinic – Partnership Opportunity
        </h1>
        <p className="text-white text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Looking to start your dental practice? Join hands with us and grow
          with confidence through our trusted partnership model.
        </p>
      </header>

      {/* Main Content Card */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-8 border border-orange-100">
          {/* About Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              About the Partnership
            </h2>
            <p className="text-gray-700 leading-relaxed">
              GuruOm Dental Clinic is a reputable dental company offering
              partnership-based investment opportunities for passionate dentists.
              We provide the support, resources, and infrastructure you need to
              establish and grow your dental practice successfully.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Currently, we have our centres running in{" "}
              <strong>Ahilyanagar and Pune</strong>, and we are looking forward
              to expanding with like-minded dental professionals.
            </p>
          </section>

          {/* Benefits Section */}
          {/* <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              Benefits of Partnering with Us
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Shared investment model reducing financial burden</li>
              <li>Access to modern infrastructure and advanced setups</li>
              <li>Business and operational support for smooth functioning</li>
              <li>Strong brand reputation in the dental community</li>
              <li>Guidance for growth and long-term sustainability</li>
              <li>Collaborative environment with industry experts</li>
            </ul>
          </section> */}

          {/* Call to Action */}
          <section className="text-center">
            <p className="text-gray-700 max-w-2xl mx-auto">
              If you&apos;re a dedicated dentist ready to begin or expand your dental
              practice, this is the right opportunity for you. Join us in
              creating a brighter future for dentistry.
            </p>
            <Link href="/ContactUsPage">
              <button className="mt-6 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-lg shadow-lg transition">
                Contact GuruOm Dental Clinic
              </button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default GurOmDentalClinicsPage;
