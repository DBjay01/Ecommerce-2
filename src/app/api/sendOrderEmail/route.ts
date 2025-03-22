import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Define a type for cart items
type CartItem = {
  product: {
    name: string;
    price: {
      price: number;
    };
    media?: {
      mainMedia?: {
        image?: {
          url: string;
        };
      };
    };
  };
  quantity: number;
  productId: string;
  variantId: string;
};

export async function POST(request: NextRequest) {
  try {
    const { userDetails, cart }: { userDetails: any; cart: CartItem[] } = await request.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider
      auth: {
        user: "shopsdental@gmail.com", // Your email address
        pass: "$GuruOmPune2025$", // Your email password or app password
      },
    });

    // Format the order summary
    const orderSummary = cart
      .map((item: CartItem) =>
        `<li>${item.product?.name || "Product Name"} - Qty: ${
          item.quantity
        } - Price: ₹${item.product?.price?.price || 0}</li>`
      )
      .join("");

    // Email content
    const mailOptions = {
      from: "shopsdental@gmail.com",
      to: "shopsdental@gmail.com", // Recipient email
      subject: "New Order Received",
      html: `
        <h2>Order Details</h2>
        <p><strong>Name:</strong> ${userDetails.name}</p>
        <p><strong>Email:</strong> ${userDetails.email}</p>
        <p><strong>Phone:</strong> ${userDetails.phone}</p>
        <p><strong>Address:</strong> ${userDetails.address}</p>
        <h3>Order Summary:</h3>
        <ul>${orderSummary}</ul>
        <p><strong>Subtotal:</strong> ₹${cart.reduce(
          (total: number, item: CartItem) =>
            total + (item.product?.price?.price || 0) * item.quantity,
          0
        )}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}