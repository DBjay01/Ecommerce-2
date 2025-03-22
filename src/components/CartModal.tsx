"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useWixClient } from "@/hooks/useWixClient";
import Link from "next/link";

function CartModal({ setIsCartOpen }: { setIsCartOpen: (value: boolean) => void }) {
  const [cart, setCart] = useState<any[]>([]);
  const wixClient = useWixClient();

  useEffect(() => {
    const fetchCart = async () => {
      const isLoggedIn = wixClient?.auth?.loggedIn();

      if (isLoggedIn) {
        // Fetch cart from Wix API for logged-in users
        try {
          const response = await wixClient.currentCart.getCurrentCart();
          setCart(response.lineItems || []);
        } catch (error) {
          console.error("Failed to fetch cart from Wix API:", error);
        }
      } else {
        // Fetch cart from local storage for unauthenticated users
        const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(localCart);
      }
    };

    fetchCart();
  }, [wixClient]);

  const removeItem = (productId: string, variantId: string) => {
    const isLoggedIn = wixClient?.auth?.loggedIn();

    if (isLoggedIn) {
      // Remove item from Wix cart for logged-in users
      const removeFromWixCart = async () => {
        try {
          const response =
            await wixClient.currentCart.removeLineItemsFromCurrentCart([
              productId,
            ]);
        } catch (error) {
          console.error("Failed to remove item from Wix cart:", error);
        }
      };
      removeFromWixCart();
    } else {
      // Remove item from local storage cart for unauthenticated users
      const updatedCart = cart.filter(
        (item: any) =>
          !(item.productId === productId && item.variantId === variantId)
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {cart.length === 0 ? (
        <div className="text-lg">Your cart is empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {cart.map((item, index) => (
              <div className="flex gap-4" key={index}>
                <Image
                  src={
                    item.product?.media?.mainMedia?.image?.url || "/product.png"
                  }
                  width={72}
                  height={96}
                  alt={item.product?.name || "cart"}
                />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold rounded-sm">
                        {item.product?.name || "Product Name"}
                      </h3>
                      <div className="p-1 bg-gray-50">
                        ₹{item.product?.price?.price || "N/A"}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500">Qty. {item.quantity}</span>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => removeItem(item.productId, item.variantId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>
                ₹
                {cart.reduce(
                  (total, item) =>
                    total + (item.product?.price?.price || 0) * item.quantity,
                  0
                )}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <Link href="/CheckoutPage">
                <button
                  className="rounded-md py-3 px-4 bg-black text-white"
                  onClick={() => setIsCartOpen(false)} // Close cart panel
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartModal;