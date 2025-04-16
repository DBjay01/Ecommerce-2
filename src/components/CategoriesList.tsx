import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoriesList = async () => {
  const WixClient = await wixClientServer();
  const cats = await WixClient.collections.queryCollections().find();

  return (
    <div className="px-4 md:px-10 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Top Categories</h2>
        <Link
          href="/list?cat=all-products"
          className="text-blue-900 font-medium text-sm hover:underline flex items-center gap-1"
        >
          All Products <span className="text-lg">»</span>
        </Link>
      </div>

      <div className="flex gap-4 rounded-lg md:gap-6 overflow-x-auto scrollbar-hide">
        {cats.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            key={item._id}
            className="flex-shrink-0 w-24 sm:w-28 md:w-32 text-center group"
          >
            <div className="relative w-full aspect-square bg-white rounded-md shadow-sm flex items-center justify-center overflow-hidden ">
              <Image
                src={item.media?.mainMedia?.image?.url || "/cat.png"}
                alt="image"
                fill
                className="object-contain p-3 transition-transform group-hover:scale-105 rounded-lg"
              />
            </div>
            <h3 className="mt-2 text-xs sm:text-sm font-medium text-gray-800 truncate">
              {item.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
