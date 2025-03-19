"use client"
import Image from "next/image";
import { useState } from "react";
import img1 from "@/assets/Airoter_Product_1.jpg";
import img2 from "@/assets/Airoter_Product_1_a.jpg";
import img3 from "@/assets/Airoter_Product_1_b.jpg";



const images = [
    {
        id: 1,
        src: img1,
    },
    {
        id: 2,
        src: img2,
    },
    {
        id: 3,
        src: img3,
    },
    // {
    //     id: 4,
    //     url: "https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    // },
];

const ProductImages = () => {

    const [index, setIndex] = useState(0);

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image src={images[index].src}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md" />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {images.map((image, i) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={image.id} onClick={() => setIndex(i)}>

                    <Image src={image.src}
                        alt=""
                        fill
                        sizes="30vw"
                        className="object-cover rounded-md" />

                </div>))}

            </div>
        </div>
    );
}
export default ProductImages;