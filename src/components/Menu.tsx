"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(false); // Close the menu when an option is clicked
  };

  return (
    <div className="relative z-[1000]"> {/* Ensure the menu container has a high z-index */}
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="fixed bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-[1100]"> {/* Use a higher z-index */}
          <Link href="/" onClick={handleMenuClick}>
            Homepage
          </Link>
          <Link href="/list" onClick={handleMenuClick}>
            Shop
          </Link>
          <Link href="/ServicesPage" onClick={handleMenuClick}>
            Our Services
          </Link>
          <Link href="/AboutUsPage" onClick={handleMenuClick}>
            About
          </Link>
          <Link href="/ContactUsPage" onClick={handleMenuClick}>
            Contact
          </Link>
          <Link href="/CheckoutPage" onClick={handleMenuClick}>
            Cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;