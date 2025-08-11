import React from "react";
import Link from "next/link";

const GuromDentalWorldPage = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-14 px-6 bg-gradient-to-t from-orange-500 to-orange-300">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Gurom Dental World
        </h1>
        <p className="text-white text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Welcome to GDW &ndash; Your trusted partner in dental excellence, delivering
          quality dental material for a healthier smile, online and offline.
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
              At Gurom Dental World, we specialize in the trading and
              distribution of premium dental materials to clinics, labs, and
              institutions. We offer a wide range of high-quality dental
              products sourced from trusted manufacturers across India and
              abroad.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              GDW is your one-stop solution for all dental material needs. We
              understand the importance of quality dental materials, which is
              why we offer only the best.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We have our centres at{" "}
              <strong>
                Ahilyanagar, Pune, Mumbai, Ch. Sambhajinagar, Nashik.
              </strong>
            </p>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              Key Features of GDW
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Unlike many online platforms that simply provide a marketplace
              for various companies to sell their products, often leading to a
              lack of accountability for timely delivery, post-delivery
              support, and hassle-free returns, we at GDW operate differently.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              At GDW, we are the dedicated connecting link between the company
              and our valued customers. We take full responsibility for ensuring
              timely delivery, addressing post-purchase concerns, and
              facilitating smooth returns. Our commitment is to provide a
              seamless and reliable shopping experience, with GDW standing
              firmly behind every transaction.
            </p>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              Why Choose Us
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Free delivery for online and offline orders *</li>
              <li>
                Twice a day delivery schedule from our centres in the mentioned
                cities
              </li>
              <li>Wide range of dental equipment and consumables</li>
              <li>Trusted brands and latest technology</li>
              <li>Competitive pricing with bulk purchase discounts</li>
              <li>Fast and reliable delivery service</li>
              <li>Excellent customer support and after-sales service</li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <p className="text-gray-700 max-w-2xl mx-auto">
              Empower your business with data-driven insights, seamless workflows, and innovative digital solutions tailored to your goals.
            </p>
            <Link href="/ContactUsPage">
              <button className="mt-6 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-lg shadow-lg transition">
                Contact GurOm Dental World
              </button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default GuromDentalWorldPage;
