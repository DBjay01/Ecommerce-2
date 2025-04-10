import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import logo from "@/assets/logo11.png";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        {/* Menu Icon on the Left */}
        <Menu />

        {/* Heading in the Center */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <div className="text-2xl tracking-wide">GurOm</div>
        </Link>

        {/* Cart and Search Icons on the Right */}
        <div className="flex items-center gap-4">
          {/* <SearchBar /> */}
          {/* <NavIcons /> */}
          <Link href="/list"><Image src="/search.png" alt="" width={22} height={22} /></Link>
          <Link href="/CheckoutPage"><Image src="/cart.png" alt="Cart" width={22} height={22} />
          </Link>

        </div>
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-left gap-3">
            <Image src={logo} alt="" width={30} height={30} />
            <div className="text-2xl tracking-wide">GurOm</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/list?cat=all-products">Shop</Link>
            <Link href="/ServicesPage">Our Services</Link>
            <Link href="/AboutUsPage">About</Link>
            <Link href="/ContactUsPage">Contact</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
