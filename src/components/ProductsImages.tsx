"use client"
import Image from "next/image";
import { useState } from "react";
import img1 from "@/assets/Airoter_Product_1.jpg";
import img2 from "@/assets/Airoter_Product_1_a.jpg";
import img3 from "@/assets/Airoter_Product_1_b.jpg";



// const images = [
//     {
//         id: 1,
//         src: img1,
//     },
//     {
//         id: 2,
//         src: img2,
//     },
//     {
//         id: 3,
//         src: img3,
//     },
//     // {
//     //     id: 4,
//     //     url: "https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
//     // },
// ];

const ProductImages = ({items}: {items: any}) => {

    const [index, setIndex] = useState(0);

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image src={items[index].image?.url}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-contain rounded-md" />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {items.map((item:any, i:number) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item.image?.url || index} onClick={() => setIndex(i)}>

                    <Image src={item.image?.url}
                        alt=""
                        fill
                        sizes="30vw"
                        className="object-contain rounded-md" />

                </div>))}

            </div>
        </div>
    );
}
export default ProductImages;