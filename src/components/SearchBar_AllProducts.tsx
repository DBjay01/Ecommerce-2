"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar_AllProducts = () => {

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if(name){
      router.push(`/list?name=${name}`)
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-white p-2 flex-1 w-full rounded-xl ring-1 ring-orange-600 text-black py-2 text-sm transition-all"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar_AllProducts;