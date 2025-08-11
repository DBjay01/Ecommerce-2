"use client"
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import logo from "@/assets/new-logo.png";
import logo2 from "@/assets/Nlogo.png";
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
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close if clicked outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <Image src={logo2} alt="Logo" width={150} height={40} />
          </Link>

          {/* Cart and Search Icons on the Right */}
          <div className="flex items-center gap-4">
            <Link href="/list?cat=all-products">
              <Image src="/search.png" alt="" width={22} height={22} />
            </Link>
            <Link href="/CheckoutPage">
              <Image src="/cart.png" alt="Cart" width={22} height={22} />
            </Link>
          </div>
        </div>

        {/* BIGGER SCREENS */}
        <div className="hidden md:flex items-center justify-between pt-3 h-full gap-6">
          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center gap-3 my-4">
            <Image src={logo2} alt="Logo" width={250} height={28} />

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
      <div className="hidden md:flex items-center bg-gradient-to-r from-blue-100 to-blue-100 py-2 shadow-sm border-t border-b border-gray-200 px-4 relative">
        {/* Centered Links */}
        <div className="absolute left-1/3 pl-36 transform -translate-x-1/2 flex gap-10 text-sm font-medium text-gray-700">
          {/* Categories Dropdown */}
          {/* <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="flex items-center gap-2 hover:text-lama hover:underline underline-offset-4 transition-all duration-200">
              <Layers size={18} className="text-orange-600" />
              Categories
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-blue-200 z-50">
                <Link
                  href="/list?cat=general-dentistry"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  General Dentistry
                </Link>
                <Link
                  href="/list?cat=endodontics"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Endodontics
                </Link>
                <Link
                  href="/list?cat=periodontics"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Periodontics
                </Link>
                <Link
                  href="/list?cat=oral-surgery"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Oral Surgery
                </Link>
                <Link
                  href="/list?cat=orthodontics"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Orthodontics
                </Link>
                <Link
                  href="/list?cat=prosthodontics"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Prosthodontics
                </Link>
                <Link
                  href="/list?cat=pedodontics"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Pedodontics
                </Link>
              </div>
            )}
          </div> */}
          <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 text-gray-800 hover:text-orange-600 transition-all duration-200"
      >
        <Layers size={18} className="text-orange-600" />
        Categories
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-blue-200 overflow-hidden z-50">
          {[
            { href: "/list?cat=general-dentistry", label: "General Dentistry" },
            { href: "/list?cat=endo", label: "Endodontics" },
            { href: "/list?cat=periodontics", label: "Periodontics" },
            { href: "/list?cat=oral", label: "Oral Surgery" },
            { href: "/list?cat=orthodontic-instruments", label: "Orthodontics" },
            { href: "/list?cat=prostho", label: "Prosthodontics" },
            { href: "/list?cat=pedodontics", label: "Pedodontics" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 hover:bg-orange-50 text-gray-700 transition-colors"
              onClick={() => setOpen(false)} // close after click
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>

          {/* Categories Dropdown */}
          {/* <div className="relative group">
            <button className="flex items-center gap-2 hover:text-lama hover:underline underline-offset-4 transition-all duration-200">
              <Layers size={18} className="text-orange-600" />
              Categories
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            Dropdown menu
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-blue-200 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out z-50">
              <Link href="/list?cat=general-dentistry" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">
                General Dentistry
              </Link>
              <Link href="/list?cat=endo" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">
                Endodontics
              </Link>
              <Link href="/list?cat=periodontics" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">
                Periodontics
              </Link>
              <Link href="/list?cat=oral" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">
                Oral Surgery
              </Link>
              <Link href="/list?cat=orthodontic-instruments" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">
                Orthodontics
              </Link>
              <Link href="/list?cat=prostho" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">
                Prosthodontics
              </Link>
              <Link href="/list?cat=pedodontics" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">
                Pedodontics
              </Link>
            </div>
          </div> */}

          {/* ...other links... */}
          <Link href="/ServicesPage" className="flex items-center gap-2 hover:text-lama hover:underline underline-offset-4 transition-all duration-200">
            <Truck size={18} className="text-orange-600" />
            Explore Services
          </Link>
          <Link href="/list?cat=all-products" className="flex items-center gap-2 hover:text-lama hover:underline underline-offset-4 transition-all duration-200">
            <ShoppingBag size={18} className="text-orange-600" />
            Shop Now
          </Link>
          <Link href="/ContactUsPage" className="flex items-center gap-2 hover:text-lama hover:underline underline-offset-4 transition-all duration-200">
            <Phone size={18} className="text-orange-600" />
            Contact Us
          </Link>
        </div>
        {/* Right-Aligned Contact */}
        <div className="ml-auto text-sm font-medium text-gray-700 flex items-center gap-2">
          {/* <Headphones size={18} /> */}
          <span>shopsdental@gmail.com | +91 90904 14106</span>
        </div>
      </div>

      {/* THIRD NAVBAR (Mobile Only) */}
      <div className="flex md:hidden justify-center gap-4 items-center  bg-gradient-to-r from-blue-200 to-blue-100 py-2 shadow-sm border-t border-b border-gray-200 px-2 overflow-x-auto text-xs font-medium">
        <Link
          href="/list?cat=all-products"
          className="flex items-center gap-1 hover:text-lama hover:underline underline-offset-2 transition-all duration-200"
        >
          <Layers size={14} />
          Categories
        </Link>
        <Link
          href="/ServicesPage"
          className="flex items-center gap-1 hover:text-lama hover:underline underline-offset-2 transition-all duration-200"
        >
          <Truck size={14} />
          Services
        </Link>
        <Link
          href="/list?cat=all-products"
          className="flex items-center gap-1 hover:text-lama hover:underline underline-offset-2 transition-all duration-200"
        >
          <ShoppingBag size={14} />
          Shop
        </Link>
        {/* <Link
    href="/AboutUsPage"
    className="flex items-center gap-1 hover:text-lama hover:underline underline-offset-2 transition-all duration-200"
  >
    <Info size={14} />
    About
  </Link> */}
        <Link
          href="/ContactUsPage"
          className="flex items-center gap-1 hover:text-lama hover:underline underline-offset-2 transition-all duration-200"
        >
          <Phone size={14} />
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
