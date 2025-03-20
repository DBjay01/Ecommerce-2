// const Add = () => {
//     return (
//         <div className=""> Add Products</div>
//     )
// }

// export default Add;

"use client";
import { useWixClient } from "@/hooks/useWixClient";
import { catalog } from "@wix/ecom/service-plugins";
import { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  //Temporary
//   const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < 14) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();

  const addItem = async() =>{
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems:[
        {
          catalogReference:{
            appId:process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId:productId,
          },
          quantity: quantity 
        }
      ]
    }   
    );

  }

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className=" flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">Last {stockNumber} Items Left</div>
        </div>
        <button onClick={addItem} className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
