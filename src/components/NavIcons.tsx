"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";

function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cartCount, setCartCount] = useState(0); // State to store cart count

  const router = useRouter();
  const wixClient = useWixClient();

  // Fetch cart items and calculate the total quantity
  useEffect(() => {
    const fetchCartCount = async () => {
      const isLoggedIn = wixClient?.auth?.loggedIn();

      if (isLoggedIn) {
        // Fetch cart from Wix API for logged-in users
        try {
          const response = await wixClient.currentCart.getCurrentCart();
          const totalItems = response.lineItems?.reduce(
            (total: number, item: any) => total + item.quantity,
            0
          );
          setCartCount(totalItems || 0);
        } catch (error) {
          console.error("Failed to fetch cart from Wix API:", error);
        }
      } else {
        // Fetch cart from local storage for unauthenticated users
        const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const totalItems = localCart.reduce(
          (total: number, item: any) => total + item.quantity,
          0
        );
        setCartCount(totalItems);
      }
    };

    fetchCartCount();
  }, [wixClient, isCartOpen]); // Recalculate cart count when cart modal is toggled

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  return (
    <><div className="flex items-center gap-4 xl:gap-6 relative">
      {/* Profile Icon */}
      <Link href="/CheckoutPage"><Image
        src="/profile.png"
        alt="Profile"
        width={22}
        height={22}
        className="cursor-pointer"
        // onClick={() => setIsProfileOpen((prev) => !prev)}
      /></Link>
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div
            className="mt-2 cursor-pointer"
            onClick={handleLogout}
          >
            {isLoading ? "Logging out..." : "Logout"}
          </div>
        </div>
      )}

      {/* Notification Icon */}
      <Image
        src="/notification.png"
        alt="Notifications"
        width={22}
        height={22}
        className="cursor-pointer"
      />

      {/* Cart Icon */}
      <div
  className="relative cursor-pointer"
  onClick={() => setIsCartOpen((prev) => !prev)}
>
  <Image src="/cart.png" alt="Cart" width={22} height={22} />
  {cartCount > 0 && (
    <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
      {cartCount}
    </div>
  )}
</div>
{isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />} {/* Pass setIsCartOpen */}
    </div></>
  );
}

export default NavIcons;