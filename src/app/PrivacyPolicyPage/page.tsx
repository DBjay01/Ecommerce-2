"use client";

import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="mt-[220px] md:pt-6">
      <section className="pt-8 pb-0 md:-mt-28 bg-gradient-to-b from-white to-[#87CEEB] overflow-x-clip">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="md:flex items-center">
            <div className="pb-10 ml-10">
              <h1 className="text-5xl md:text-7xl font-bold pb-2 tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Privacy Policy
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Learn how we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-t from-[#b4d1f7] to-[#FFFFFF] flex justify-center items-center">
        <div className="container max-w-[800px] mx-auto px-6 bg-white shadow-xl rounded-xl p-10 border-gray-1000">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#001E80]">Privacy Policy</h2>
            <p className="text-gray-700">
              <strong>1. Introduction</strong>
              <br />
              This Privacy Policy explains how GurOm Dental collects, uses, and protects your personal information. By using our website, you consent to the terms outlined below.
            </p>
            <p className="text-gray-700">
              <strong>2. Personal Data Collected</strong>
              <br />
              We collect the following information:
              <br />
              • Personal details: Name, email, phone number, address
              <br />
              • Payment information: Processed via secure third-party payment gateways
              <br />
              • Order history and preferences
              <br />
              • Browsing behavior through cookies and analytics
            </p>
            <p className="text-gray-700">
              <strong>3. How Data is Used</strong>
              <br />
              • To process orders and provide customer support
              <br />
              • To improve website functionality and user experience
              <br />
              • To send promotional emails (users can opt out anytime)
              <br />
              • For compliance with legal obligations
            </p>
            <p className="text-gray-700">
              <strong>4. Cookies & Tracking</strong>
              <br />
              • We use cookies, analytics tools, and tracking pixels to improve website performance.
              <br />
              • Users can manage cookie preferences in their browser settings.
            </p>
            <p className="text-gray-700">
              <strong>5. Data Sharing</strong>
              <br />
              • We do not sell or share personal data with unauthorized third parties.
              <br />
              • Data is shared only with payment gateways, logistics partners, and analytics providers to ensure seamless operations.
            </p>
            <p className="text-gray-700">
              <strong>6. Security Measures</strong>
              <br />
              • We implement SSL encryption and secure payment gateways to protect user data.
              <br />
              • Users are encouraged to use strong passwords and avoid sharing login credentials.
            </p>
            <p className="text-gray-700">
              <strong>7. User Rights</strong>
              <br />
              Users have the right to:
              <br />
              • Access their stored personal data
              <br />
              • Request modifications to incorrect information
              <br />
              • Delete their account and associated data
            </p>
            <p className="text-gray-700">
              <strong>8. Data Retention</strong>
              <br />
              • We retain personal data as long as necessary for business and legal purposes.
              <br />
              • Inactive user data may be deleted after 5 years.
            </p>
            <p className="text-gray-700">
              <strong>9. Third-Party Links</strong>
              <br />
              • Our website may contain links to external websites, which have separate privacy policies. We are not responsible for their practices.
            </p>
            <p className="text-gray-700">
              <strong>10. Childrens Privacy</strong>
              <br />
              • This website is not intended for users under 18 years.
            </p>
            <p className="text-gray-700">
              <strong>11. Policy Updates</strong>
              <br />
              • We reserve the right to modify this Privacy Policy at any time.
              <br />
              • Changes will be communicated via our website or email notifications.
            </p>
            <p className="text-gray-700">
              For any inquiries regarding these policies, contact us at <a href="mailto:sketchitup.official@gmail.com" className="text-blue-500">sketchitup.official@gmail.com</a> |<br /> +91 90904 14106.
              <br />
              <strong>Last Updated:</strong> March 2025.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;