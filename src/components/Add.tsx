"use client";
import { useState } from "react";

const Add = ({
  product,
  variantId,
  stockNumber,
}: {
  product: any; // Accept the complete product object
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity state
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1); // Decrease quantity
    } else if (type === "i" && quantity < 10) {
      setQuantity((prev) => prev + 1); // Increase quantity (no limit)
    }
  };

  const addItem = async () => {
    try {
      const cartItem = {
        productId: product._id,
        variantId,
        quantity,
        product, // Store the entire product object
      };

      // Add to local storage cart
      const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingItemIndex = localCart.findIndex(
        (item: any) =>
          item.productId === product._id && item.variantId === variantId
      );

      if (existingItemIndex > -1) {
        // Update quantity if item already exists
        localCart[existingItemIndex].quantity += quantity;
      } else {
        // Add new item
        localCart.push(cartItem);
      }

      localStorage.setItem("cart", JSON.stringify(localCart));
      console.log("Item added to local cart:", localCart);

      // Show popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 relative">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
              disabled={quantity <= 1} // Disable button if quantity is 1
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          {/* <div className="text-xs">Last {stockNumber} Items Left</div> */}
        </div>
        <button
          onClick={addItem}
          className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
        >
          Add To Cart
        </button>
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="absolute top-[-50px] right-0 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg animate-slide-in">
          Product added to cart! <br />
          <a href="/CheckoutPage" className="underline">
            Check your cart
          </a>
        </div>
      )}
    </div>
  );
};

export default Add;