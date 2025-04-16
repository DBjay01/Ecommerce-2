import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import logo from "@/assets/logo2.png";
import Mlogo from "@/assets/Mobile-Logo.png";
import {
  ShoppingBag,
  Layers,
  Truck,
  Info,
  Phone,
  Headphones,
} from "lucide-react";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 padding-top">
      {/* MAIN NAVBAR */}
      <div className="h-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white shadow-md">
        {/* MOBILE */}
        <div className="h-full flex items-center justify-between md:hidden">
          {/* Menu Icon on the Left */}
          <Menu />

          {/* Heading in the Center */}
          <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <Image src={Mlogo} alt="Logo" width={150} height={40} />
          </Link>

          {/* Cart and Search Icons on the Right */}
          <div className="flex items-center gap-4">
            <Link href="/list">
              <Image src="/search.png" alt="" width={22} height={22} />
            </Link>
            <Link href="/CheckoutPage">
              <Image src="/cart.png" alt="Cart" width={22} height={22} />
            </Link>
          </div>
        </div>

        {/* BIGGER SCREENS */}
        <div className="hidden md:flex items-center justify-between h-full gap-10">
          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center gap-3 my-4">
            <Image src={logo} alt="Logo" width={390} height={26} />

          </Link>

          {/* MIDDLE: Search Bar */}
          <div className="flex-1 px-8">
            <SearchBar />
          </div>

          {/* RIGHT: Navigation Icons */}
          <div className="flex items-center gap-6">
            <NavIcons />
          </div>
        </div>
      </div>

      {/* <div className="hidden xl:flex gap-4">
          <Link href="/list?cat=all-products">Shop</Link>
          <Link href="/ServicesPage">Our Services</Link>
          <Link href="/AboutUsPage">About</Link>
          <Link href="/ContactUsPage">Contact</Link>
        </div> */}

      {/* SECONDARY NAVBAR */}
      <div className="hidden md:flex items-center bg-gradient-to-r from-gray-50 via-white to-gray-50 py-2 shadow-sm border-t border-b border-gray-200 px-6 relative">
        {/* Centered Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 text-sm font-medium text-gray-700">
          <Link
            href="/list?cat=all-products"
            className="flex items-center gap-2 hover:text-lama hover:underline underline-offset-4 transition-all duration-200"
          >
            <ShoppingBag size={16} />
            Shop Now
          </Link>
          <Link
            href="/list?cat=all-products"
            className="flex items-center gap-2 hover:text-lama hover:underline underline-offset-4 transition-all duration-200"
          >
            <Layers size={16} />
            Category
          </Link>
          <Link
            href="/ServicesPage"
            className="flex items-center gap-2 hover:text-lama hover:underline underline-offset-4 transition-all duration-200"
          >
            <Truck size={16} />
            Explore Services
          </Link>
          <Link
            href="/AboutUsPage"
            className="flex items-center gap-2 hover:text-lama hover:underline underline-offset-4 transition-all duration-200"
          >
            <Info size={16} />
            About
          </Link>
          <Link
            href="/ContactUsPage"
            className="flex items-center gap-2 hover:text-lama hover:underline underline-offset-4 transition-all duration-200"
          >
            <Phone size={16} />
            Contact
          </Link>
        </div>

        {/* Right-Aligned Contact */}
        <div className="ml-auto text-sm font-medium text-gray-700 flex items-center gap-2">
          <Headphones size={16} />
          <span>+91 90904 14106</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
