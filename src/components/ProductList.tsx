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
            className="flex flex-col gap-4 bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            key={product._id}
          >
            <div className="relative w-full h-48">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="object-contain rounded-md"
              />
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-sm">{product.name}</span>
              <span className="font-semibold text-sm">₹{product.price?.price}</span>
            </div>
            <div>
              <h4 className="text-xs">
                <b>Company</b>: {product.brand}
              </h4>
            </div>
            <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
              Add To Cart
            </button>
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