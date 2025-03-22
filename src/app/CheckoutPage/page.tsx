"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

function CheckoutPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Fetch cart from local storage
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(localCart);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemoveProduct = (productId: string, variantId: string) => {
    // Remove the product from the cart
    const updatedCart = cart.filter(
      (item: any) =>
        !(item.productId === productId && item.variantId === variantId)
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
  };

  
  const handlePlaceOrder = async () => {
    try {
      setIsLoading(true);
  
      // Validate form fields
      if (!userDetails.name || !userDetails.email || !userDetails.phone || !userDetails.address) {
        alert("Please fill in all required fields");
        return;
      }
  
      // Calculate total amount
      const totalAmount = cart.reduce(
        (total, item) =>
          total + (item.product?.price?.price || 0) * item.quantity,
        0
      );
  
      // Format cart items for email
      const orderItems = cart.map((item) => ({
        name: item.product?.name || "Product Name",
        quantity: item.quantity,
        price: item.product?.price?.price || 0,
        image_url: item.product?.media?.mainMedia?.image?.url || "/product.png",
      }));
  
      // Prepare email template parameters
      const templateParams = {
        customer_email: userDetails.email,
        from_name: userDetails.name,
        customer_phone: userDetails.phone,
        shipping_address: userDetails.address,
        order_id: `ORD-${Date.now()}`, // Generate a unique order ID
        order_items: orderItems, // Pass order items as an array
        total_cost: totalAmount,
        shipping_cost: 50, // Example shipping cost
        tax_cost: 18, // Example tax cost
      };
  
      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams
      );
  
      if (response.status === 200) {
        alert("Order placed successfully! A confirmation email has been sent.");
        localStorage.removeItem("cart");
        router.push("/");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* User Details Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Please Enter Your Details</h2>
          <form className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={userDetails.name}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={userDetails.email}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={userDetails.phone}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={userDetails.address}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
            >
              {isLoading ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Cart Order Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src={item.product?.media?.mainMedia?.image?.url || "/product.png"}
                  width={72}
                  height={96}
                  alt={item.product?.name || "Product"}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.product?.name || "Product Name"}</h3>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-gray-500">Price: ₹{item.product?.price?.price || 0}</p>
                </div>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleRemoveProduct(item.productId, item.variantId)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4">
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
            <p className="text-sm text-gray-500 mt-2">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;