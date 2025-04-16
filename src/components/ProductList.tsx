import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 16;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const WixClient = await wixClientServer();

  const productQuery = WixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();

  return (
    <>
      <div className="mt-12 mb-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {res.items.map((product: products.Product) => (
          <Link
            href={"/" + product.slug}
            className="flex flex-col justify-between bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            key={product._id}
          >
            {/* Image */}
            <div className="relative w-full h-48 mb-4">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt={product.name || "Product"}
                fill
                sizes="25vw"
                className="object-contain rounded-md"
              />
            </div>

            {/* Info + Price */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-gray-800 line-clamp-2">{product.name}</span>
                <span className="text-xs text-gray-600">Company: {product.brand}</span>
              </div>
              <span className="font-semibold text-lg text-gray-900 whitespace-nowrap">₹{product.price?.price}</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:gap-4">
              <button className="w-full rounded-xl ring-1 ring-lama text-lama py-2 text-sm hover:bg-lama hover:text-white transition-all">
                Add To Cart
              </button>
              <button className="w-full rounded-xl bg-lama text-white py-2 text-sm hover:bg-lama/90 transition-all">
                Buy Now
              </button>
            </div>
          </Link>
        ))}
      </div>


      <div>
        {searchParams?.cat || searchParams?.name ? (
          <Pagination
            currentPage={res.currentPage || 0}
            hasPrev={res.hasPrev()}
            hasNext={res.hasNext()}
          />
        ) : null}
      </div>
    </>
  );
};

export default ProductList;