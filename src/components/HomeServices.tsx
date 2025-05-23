import Image from 'next/image';
import Link from 'next/link';

// Import images/icons
import DentalClinicsImg from '@/assets/Dental_Clinics_2.png';
import DentalLabImg from '@/assets/Dental_Lab_2.png';
import DentalMaterialImg from '@/assets/Dental_Material_Trading.png';
import DentalEquipmentImg from '@/assets/Dental_Equipment_Manufacturing_a1.png';
import CenterImage from '@/assets/service-banner.png';

const services = [
  {
    title: "Dental Material Trading",
    image: DentalMaterialImg,
    description: "High-quality dental materials to keep your clinic and lab running smoothly",
    pageurl: "/ServicesPage",
  },
  {
    title: "Dental Lab",
    image: DentalLabImg,
    description: "Precision-crafted crowns, bridges, and dentures with cutting-edge CAD/CAM technology",
    pageurl: "/ServicesPage",
  },
  {
    title: "Dental Clinics",
    image: DentalClinicsImg,
    description: "Advanced care with the latest technology for healthy, beautiful smiles",
    pageurl: "/ServicesPage",
  },
  {
    title: "Dental Equipment Manufacturing",
    image: DentalEquipmentImg,
    description: "Innovative and reliable dental equipment to enhance patient care",
    pageurl: "/ServicesPage",
  },
];

const HomeServices = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="section-heading max-w-[850px] text-center mx-auto">
          <h2 className="section-title text-2xl font-bold text-[#1A3D5D]">Our Services</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 items-center">
          {/* Left Services */}
          <div className="flex flex-col gap-4">
            {services.slice(0, 2).map(({ title, image, description, pageurl }) => (
              <Link href={pageurl} key={title}>
                <div
                  className="p-4 border bg-[#f3fbff] rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center text-center hover:border-[#87CEEB] hover:shadow-lg"
                >
                  <Image src={image} alt={title} width={60} height={60} className="rounded-lg" />
                  <h3 className="text-sm font-semibold text-[#1A3D5D] mt-2">{title}</h3>
                  <p className="text-gray-600 text-xs mt-1">{description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <Image src={CenterImage} alt="Central Service Image" width={200} height={200} className="rounded-xl" />
          </div>

          {/* Right Services */}
          <div className="flex flex-col gap-4">
            {services.slice(2, 4).map(({ title, image, description, pageurl }) => (
              <Link href={pageurl} key={title}>
                <div
                  className="p-4 border bg-[#f3fbff] rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center text-center hover:border-[#87CEEB] hover:shadow-lg"
                >
                  <Image src={image} alt={title} width={60} height={60} className="rounded-lg" />
                  <h3 className="text-sm font-semibold text-[#1A3D5D] mt-2">{title}</h3>
                  <p className="text-gray-600 text-xs mt-1">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;