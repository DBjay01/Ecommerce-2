import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductsImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import React from "react";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  const WixClient = await wixClientServer();

  const products = await WixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Img */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>

        {/* Render description as raw HTML */}
        <div
          className="text-gray-500"
          dangerouslySetInnerHTML={{
            __html: product.description || "", // Ensure description is a string
          }}
        />

        <div className="h-[2px] bg-gray-100" />

        {product.price?.price && product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">₹ {product.price?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h2 className="font-medium text-2xl">{product.price?.price}</h2>
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.discountedPrice}
            </h3>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />

        <Add
          product={product}
          variantId="00000000-0000-0000-0000-000000000000"
          stockNumber={product.stock?.quantity || 0}
        />

        <div className="h-[2px] bg-gray-100" />

        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;