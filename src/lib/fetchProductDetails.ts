import { useWixClient } from "@/hooks/useWixClient";

export const fetchProductDetails = async (wixClient: any, productId: string) => {
    try {
      // Fetch product details using the Wix API
      const productDetails = await wixClient.products.getProduct(productId);
      return productDetails;
    } catch (error) {
      console.error("Failed to fetch product details:", error);
      return null;
    }
  };