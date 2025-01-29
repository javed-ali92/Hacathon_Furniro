"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../../hooks/redux";
import { getCart, getLikedProducts } from "../../redux/cartSlice";

export default function Header() {
  const cart = useAppSelector(getCart)
  const like = useAppSelector(getLikedProducts)
  const [menuOpen, setMenuOpen] = useState(false);
  const [query , setquery] = useState<string>("")


  const router = useRouter();
  const serachResultHandler = () =>{
    router.push(`/search/${query}`)
  }

  
  const handleSearch = () => {
    if (query.trim() === "") {
      console.error("Search query is empty");
      return;
    }
    console.log("Searching for:", query);
    // Perform your search logic here
  };

  return (
    <header className="max-w-[1286px] h-[100px] mx-auto flex justify-between items-center relative z-10 px-4 md:px-8">
      {/* logo */}
      <Link href={"/"}>
      <div className="xs:w-[185px] w-auto  h-[32px] flex items-center">
        <Image
          src={"/logo.png"}
          alt="Website logo"
          height={41}
          width={50}
          className="md:w-auto md:h-8 w-8 h-6"
        />
        <h2 className="lg:text-[34px]/[49px] md:text-3xl text-2xl font-bold font-montserrat mt-1">
          Furniro
        </h2>
      </div>
      </Link>

      {/* nav bar */}
      <div className="lg:hidden absolute top-[32px] right-1">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row md:gap-2 absolute lg:relative top-24 lg:top-0 right-2 lg:left-auto bg-white lg:bg-transparent w-[200px] lg:w-auto text-sm lg:text-base font-medium font-poppins z-20 lg:items-center`}
      >
        <li>
          <Link
            href="/"
            className="block p-3  hover:underline active:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/shop"
            className="block p-3  hover:underline active:underline"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="block p-3  hover:underline active:underline"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block p-3  hover:underline active:underline"
          >
            Contact
          </Link>
        </li>
        <li className="block lg:hidden">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 outline-none w-full"
              value={query}
              onChange={(e) => setquery (e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(); // Call the search function when "Enter" is pressed
                }
              }}
              />
            <button className="bg-gray-200 px-3 py-2 hover:bg-gray-300"
            onClick={serachResultHandler}>
              <Image
              src={"/icon-search.png"}
              alt="Heart Icon"
              height={26.81}
              width={26.33}
              />
            </button>
          </div>
        </li>
      </ul>

      {/* Search Bar and Icons */}
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 outline-none w-full"
            value={query}
            onChange={(e) => setquery (e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(); // Call the search function when "Enter" is pressed
              }
            }}
          />
          <button className="bg-gray-200 px-3 py-2 hover:bg-gray-300" onClick={serachResultHandler}>
          <Image
              src={"/icon-search.png"}
              alt="Heart Icon"
              height={26.81}
              width={26.33}
              />
          </button>
        </div>

        <Link href={""}>
          <Image
            src={"/profile-icon.png"}
            alt="Profile icon"
            width={23.33}
            height={18.67}
          />
        </Link>

        <div  className="relative ">
          <div className="relative">
          <p className="absolute -top-1 -right-1 w-5 flex items-center justify-center h-5 te bg-[#B88E2F] hover:bg-[#be9942] rounded-full text-white">{like.length}</p>
          <Link href={"/wishlist"}>
            <Image
              src={"/heart.png"}
              alt="Heart Icon"
              height={26.81}
              width={35.33}
            />
          </Link>
          </div>
        </div>

        <div className="relative pr-10">
          <Link href={"/cart"}>
            <div className="relative ">
              <p className="absolute -top-2 -right-2 w-5 flex items-center justify-center h-5 te bg-[#B88E2F] hover:bg-[#be9942] rounded-full text-white">{cart.length}</p>
            <Image
              src="/shopping-cart.png"
              alt="Shopping Cart"
              height={22}
              width={25}
              className="cursor-pointer"
            />
            </div>
          </Link>

        </div>
      </div>
    </header>
  );
}