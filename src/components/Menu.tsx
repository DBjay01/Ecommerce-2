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
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/" onClick={handleMenuClick}>
            Homepage
          </Link>
          <Link href="/list" onClick={handleMenuClick}>
            Shop
          </Link>
          <Link href="/aboutuspage" onClick={handleMenuClick}>
            About
          </Link>
          <Link href="/contactuspage" onClick={handleMenuClick}>
            Contact
          </Link>
          {/* <Link href="/" onClick={handleMenuClick}>
            Logout
          </Link> */}
          <Link href="/CheckoutPage" onClick={handleMenuClick}>
            Cart(1)
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;