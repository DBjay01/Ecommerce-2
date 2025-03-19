import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductsImages";
import React from "react";

function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Img  */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* Text  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Airoter</h1>
        <p className="text-gray-500">
        An Airotor is a high-speed dental handpiece used primarily for cutting, shaping, and polishing teeth during dental procedures. It operates using compressed air, which drives a small turbine to rotate the bur at speeds of up to 400,000 RPM, enabling precise and efficient tooth preparation.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h2 className="font-medium text-2xl">$50</h2>
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Key Features</h4>
          <p>
          High-Speed Rotation – Ensures smooth and accurate cutting
          </p>
          <p>
          Water Spray System – Prevents overheating and keeps the area clean
          </p>
          <p>
          Ergonomic Design – Provides comfort and control for the dentist
          </p>
          <p>
          Sterilizable – Ensures hygiene and patient safety
          </p>
        </div>
        
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            nam culpa iusto officiis asperiores in labore non distinctio,
            voluptatum corrupti obcaecati minus fugit porro. Explicabo, commodi?
            Vero cumque accusamus repudiandae!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            nam culpa iusto officiis asperiores in labore non distinctio,
            voluptatum corrupti obcaecati minus fugit porro. Explicabo, commodi?
            Vero cumque accusamus repudiandae!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
