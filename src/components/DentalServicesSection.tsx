// import Image, { StaticImageData } from "next/image";
// import DentalClinicImg from "@/assets/Dental_Clinics_a1.jpg";
// import DentalLabImg from "@/assets/Dental_Lab_a1.jpg";
// import DentalMaterialImg from "@/assets/Dental_Material_a1.jpg";
// import DentalEquipmentImg from "@/assets/Dental_Equipment_Manufacturing_a1.jpg";

// interface ServiceCardProps {
//   image: StaticImageData;
//   title: string;
//   description: string;
//   services: string[];
//   buttonText: string;
// }

// export default function DentalServicesSection() {
//   return (
//     <section className="py-12 bg-gray-100 flex justify-center bg-gradient-to-b from-[#f5f9ff] to-[#b4d1f7] overflow-hidden">
//       <div className="max-w-5xl w-full px-4">
//         <h1 className="text-4xl font-bold text-center text-gray-900 mb-10 p-4 md:text-6xl tracking-tighter bg-gradient-to-b from-black to-[#0068f1] text-transparent bg-clip-text">
//           Our Dental Services
//         </h1>

//         <ServiceCard
//           image={DentalMaterialImg}
//           title="Dental Material Trading"
//           description="We supply top-quality dental materials, from impression compounds to restorative solutions, ensuring clinics and labs have everything needed for seamless operations."
//           services={["Impression Materials", "Dental Cements", "Restorative Materials", "Disposable Consumables"]}
//           buttonText="Shop Now"
//         />
        
//         <ServiceCard
//           image={DentalEquipmentImg}
//           title="Dental Equipment Manufacturing"
//           description="Our engineers develop cutting-edge dental equipment, including ergonomic chairs and diagnostic tools, providing reliable solutions to enhance patient care."
//           services={["Dental Chairs and Units", "Imaging and Diagnostic Equipment", "Sterilization Systems", "Handpieces and Tools"]}
//           buttonText="Explore Products"
//         />

//         <ServiceCard
//           image={DentalClinicImg}
//           title="Dental Clinics"
//           description="GurOm Dental Clinics offer advanced technology and expert care for all ages.From preventive check-ups to cosmetic and restorative treatments, we ensure a personalized, comfortable experience."
//           services={["Routine Check-Ups & Cleaning", "Cosmetic Dentistry", "Restorative Dentistry", "Orthodontic Services"]}
//           buttonText="Book Your Appointment"
//         />

//         <ServiceCard
//           image={DentalLabImg}
//           title="Dental Lab"
//           description="At GurOm Dental Lab, precision meets innovation with CAD/CAM technology, crafting custom crowns, bridges, and dentures. Partner with us for high-quality prosthetic solutions."
//           services={["Custom Crowns & Bridges", "Denture Fabrication", "Implant-Supported Prosthetics", "Full-Mouth Reconstructions"]}
//           buttonText="Partner With Us"
//         />

      

        
//       </div>
//     </section>
//   );
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, services, buttonText }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-xl hover:border-2 hover:border-[#87CEEB] overflow-hidden flex flex-col md:flex-row mt-8 transition-transform transform hover:scale-105 duration-300">
//       <div className="md:w-1/2 p-6 flex flex-col items-center bg-gradient-to-br from-white to-[#eaf6fd]">
//         <Image src={image} alt={title} width={300} height={300} className="rounded-lg object-cover " />
//         <h2 className="text-3xl font-semibold mt-4 text-[#004b87] text-center">{title}</h2>
//         <p className="text-gray-700 mt-3 text-center leading-relaxed">{description}</p>
//       </div>
//       <div className="md:w-1/2 bg-[#eaf6fd] p-6 flex flex-col justify-center items-center ">
//         <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">What We Offer:</h3>
//         <ul className="text-gray-700 text-md space-y-2 text-center w-full">
//           {services.map((service, index) => (
//             <li key={index} className="bg-white px-3 py-2 pl-[7rem] rounded-md shadow-sm flex items-center justify-left space-x-2">
//               <span className="text-[#004b87] font-bold">✔</span>
//               <span>{service}</span>
//             </li>
//           ))}
//         </ul>
//         <a
//           href="/list?cat=all-products"
//           className="mt-6 px-6 py-3 bg-[#004b87] text-white font-semibold rounded-lg shadow-md hover:bg-[#003366] transition duration-300"
//         >
//           {buttonText}
//         </a>
//       </div>
//     </div>
//   );
// };

import Image, { StaticImageData } from "next/image";
import DentalClinicImg from "@/assets/Dental_Clinics_a1.jpg";
import DentalLabImg from "@/assets/Dental_Lab_a1.jpg";
import DentalMaterialImg from "@/assets/Dental_Material_a1.jpg";
import DentalEquipmentImg from "@/assets/Dental_Equipment_Manufacturing_a1.jpg";

interface ServiceCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  services: string[];
  buttonText: string;
  buttonLink: string;
  subtitle?: string; // Optional subtitle prop
}

export default function   DentalServicesSection() {
  return (
    <section className="py-12 bg-gray-100 flex justify-center bg-gradient-to-b from-[#f5f9ff] to-[#b4d1f7] overflow-hidden">
      <div className="max-w-5xl w-full px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10 p-4 md:text-6xl tracking-tighter bg-gradient-to-b from-black to-[#0068f1] text-transparent bg-clip-text">
          Our Dental Services
        </h1>

        <ServiceCard
          image={DentalMaterialImg}
          title="Dental Material Trading"
          description="We supply top-quality dental materials, from impression compounds to restorative solutions, ensuring clinics and labs have everything needed for seamless operations."
          services={["Impression Materials", "Dental Cements", "Restorative Materials", "Disposable Consumables"]}
          buttonText="Shop Now"
          buttonLink="/list?cat=all-products"
          subtitle="Restorative materials" // Optional subtitle prop
        />

        <ServiceCard
          image={DentalLabImg}
          title="Dental Lab"
          description="At GurOm Dental Lab, precision meets innovation with CAD/CAM technology, crafting custom crowns, bridges, and dentures. Partner with us for high-quality prosthetic solutions."
          services={["Custom Crowns & Bridges", "Denture Fabrication", "Implant-Supported Prosthetics", "Full-Mouth Reconstructions"]}
          buttonText="Partner With Us"
          buttonLink="/AboutUsPage"
          subtitle="Disposable & consumables"
         
        />
        
        <ServiceCard
          image={DentalClinicImg}
          title="Dental Clinics"
          description="GurOm Dental Clinics offer advanced technology and expert care for all ages. From preventive check-ups to cosmetic and restorative treatments, we ensure a personalized, comfortable experience."
          services={["Routine Check-Ups & Cleaning", "Cosmetic Dentistry", "Restorative Dentistry", "Advanced Dentistry"]}
          buttonText="Book Your Appointment"
          buttonLink="/ContactUsPage"
          subtitle="Impression materials "
        />

        <ServiceCard
          image={DentalEquipmentImg}
          title="Dental Equipment Manufacturing"
          description="Our engineers develop cutting-edge dental equipment, including ergonomic chairs and diagnostic tools, providing reliable solutions to enhance patient care."
          services={["Dental Chairs and Units", "Imaging and Diagnostic Equipment", "Sterilization Systems", "Handpieces and Tools"]}
          buttonText="Explore Products"
          buttonLink="/list?cat=all-products"
          subtitle="Dental instruments"

        />        
      </div>
    </section>
  );
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, services, buttonText, buttonLink,subtitle }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl hover:border-2 hover:border-[#87CEEB] overflow-hidden flex flex-col md:flex-row mt-8 transition-transform transform hover:scale-105 duration-300">
      <div className="md:w-1/2 p-6 flex flex-col items-center bg-gradient-to-br from-white to-[#eaf6fd]">
        <Image src={image} alt={title} width={300} height={300} className="rounded-lg object-cover" />
        <h2 className="text-3xl font-semibold mt-4 text-[#004b87] text-center">{title}</h2>
        <p className="text-gray-700 mt-3 text-center leading-relaxed">{description}</p>
      </div>
      <div className="md:w-1/2 bg-[#eaf6fd] p-6 flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-4"> {subtitle}</h3>
        <ul className="text-gray-700 text-md space-y-2 text-center w-full">
          {services.map((service, index) => (
            <li key={index} className="bg-white px-3 py-2 pl-[7rem] rounded-md shadow-sm flex items-center justify-left space-x-2">
              <span className="text-[#004b87] font-bold">✔</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
        <a
          href={buttonLink}
          className="mt-6 px-6 py-3 bg-[#004b87] text-white font-semibold rounded-lg shadow-md hover:bg-[#003366] transition duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};
