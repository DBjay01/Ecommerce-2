import Image from "next/image";
import React, { useEffect } from "react";
import img1 from "@/assets/Airoter_Product_1.jpg"
import { useWixClient } from "@/hooks/useWixClient";
import { currentCart } from "@wix/ecom";
import { useCartStore } from "@/hooks/useCartStore";

function CartModal() {
    //tempory
//   const cartItems = true;

  const wixClient = useWixClient();
  const { cart, getCart } = useCartStore();

    useEffect(()=>{
        getCart(wixClient);
    }, [wixClient,getCart]); 

    console.log(cart); 

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cart ? (
        <div className="text-lg">Your cart is empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
        <div className="flex flex-col gap-8"> 
            {/* Item  */}
            <div className="flex gap-4">
            <Image src={img1} width={72} height={96} alt="cart" />
            <div className="flex flex-col justify-between w-full">
                {/* TOP  */}
                <div className="">
                {/* Tittle  */}
                <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold rounded-sm">Product Name</h3>
                    <div className="p-1 bg-gray-50">$49</div>
                </div>
                </div>

                {/* DESC  */}
                <div className="text-sm text-gray-500"> available</div>
                {/* Bottom  */}
                <div className="flex justify-between text-sm"> 
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500" >Remove</span>
                </div>
            </div>
            </div>

            {/* Item  */}
            <div className="flex gap-4">
            <Image src={img1} width={72} height={96} alt="cart" />
            <div className="flex flex-col justify-between w-full">
                {/* TOP  */}
                <div className="">
                {/* Tittle  */}
                <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold rounded-sm">Product Name</h3>
                    <div className="p-1 bg-gray-50">$49</div>
                </div>
                </div>

                {/* DESC  */}
                <div className="text-sm text-gray-500"> available</div>
                {/* Bottom  */}
                <div className="flex justify-between text-sm"> 
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500" >Remove</span>
                </div>
            </div>
            </div>
        </div>

        {/* // BOTTOM  */}
        <div className="">
            <div className="">
                <span className="flex items-center justify-between font-semibold">Subtotal</span>
                <span className="">$49</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 mb-4">
                Shipping and taxes calculated at checkout. 
            </p>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
            </div>
        </div>

        </>

      )}
    </div>
  );
}

export default CartModal;
