import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-200 text-sm ">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-2">
          <Link href="/">
            <div className="text-2xl tracking-wide">Gurom Dental World</div>
          </Link>
          <p>
            A-403, Bhairavnath Complex, Pune Saswad Road, Opposite SP Infocity,
            Bhekrai Nagar, Hadapsar, Pune, Maharashtra 412308, India
          </p>
          <div className="w-full max-w-xl  rounded-lg overflow-hidden shadow-sm border border-gray-200">
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
          <span className="font-semibold"> shopsdental@gmail.com</span>
          <span className="font-semibold">+91 90904 14106</span>
          
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2 ">
          <div className="flex flex-col ">
            <h1 className="font-medium text-lg pb-10">COMPANY</h1>
            <div className="flex flex-col gap-6 ">
              <Link href="/AboutUsPage">About Us</Link>
              <Link href="/ContactUsPage">Contact Us</Link>
              <Link href="/list?cat=all-products">All Products</Link>
              <Link href="/list?cat=featured">Featured Products</Link>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="font-medium text-lg pb-10">CATEGORIES</h1>
            <div className="flex flex-col gap-6">
              <Link href="/list?cat=endo">Endo</Link>
              <Link href="/list?cat=general-dentistry">General Dentistry</Link>
              <Link href="/list?cat=prostho">Prostho</Link>
              <Link href="/list?cat=other-dental-equipment">
                Other Dental Equipments
              </Link>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="font-medium text-lg pb-10">POLICY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/ContactUsPage">Order Help</Link>
              <Link href="/AboutUsPage">Refund Policy</Link>
              <Link href="/PrivacyPolicyPage">Privacy Policy</Link>
              <Link href="/TermsPage">Terms & Conditions</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          <span className="font-semibold">Follow Us On</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2025 GurOm Dental</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">India | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">₹ Rupees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
