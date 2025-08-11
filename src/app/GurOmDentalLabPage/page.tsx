import React from "react";

const GuruOmDentalLabPage = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-14 px-6 bg-gradient-to-t from-orange-500 to-orange-300">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          GuruOm Dental Lab
        </h1>
        <p className="text-white text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          A journey of precision, innovation, and trust — delivering world-class
          dental solutions since 2019.
        </p>
      </header>

      {/* Main Content Card */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-8 border border-orange-100">
          
          {/* About Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              About Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In the heart of Ahilyanagar (Ahmednagar), Guru-Om Dental began its
              journey in 2019. Initially rooted in conventional practices, our
              founder <span className="font-semibold">Dr Guruprasad Handal</span>, a
              passionate Prosthodontist, foresaw a transformative shift towards
              digital dentistry. Recognizing the potential for innovation, we
              took a bold step and transitioned to a digital platform — marking
              the first of many pivotal moments in our story.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our journey took flight with the acquisition of our first intraoral
              scanner in 2019, setting the stage for our commitment to embracing
              technological advancements. Today, our lab boasts advanced CAD
              software, 3D printers, milling machines, and even a 3D metal printer
              (DMLS).
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              From a small team of 7, we have grown to 40+ professionals —
              prosthodontists, dentists, technicians, and assistants — reflecting
              our passion for excellence.
            </p>
          </section>

          {/* Growth & Services */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              Our Reach & Expertise
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We now serve over 30 cities in Maharashtra, including Pune, Mumbai,
              Nashik, Sambhajinagar, Solapur, and more — becoming one of the
              largest outsourcing dental labs in the state.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our expertise covers All-on-4, All-on-6 implants, basal implants,
              full mouth rehab, and soon, patient-specific implants.
            </p>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              Why Choose GuruOm Dental?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Precision craftsmanship with attention to detail</li>
              <li>Use of advanced digital technologies</li>
              <li>Wide range of dental restoration options</li>
              <li>Prompt turnaround and dependable service</li>
              <li>Collaborative approach with dental professionals</li>
            </ul>
          </section>

          {/* Locations */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              Our Locations
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our labs are located in Ahilyanagar, Pune, Mumbai, Ch. Sambhajinagar,
              and Nashik.
            </p>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <p className="text-gray-700 max-w-2xl mx-auto">
              Let us help you provide your patients with lasting, comfortable,
              and natural-looking dental restorations.
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-lg shadow-lg transition">
              Contact GuruOm Dental Lab
            </button>
          </section>

        </div>
      </main>
    </div>
  );
};

export default GuruOmDentalLabPage;
