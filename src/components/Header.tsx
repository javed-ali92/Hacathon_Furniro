"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="max-w-[1286px] h-[100px] mx-auto flex justify-between items-center relative z-10">
      {/* logo */}
      <div className="w-[185px] h-[32px] flex items-center">
        <Image
          src={"/logo.png"}
          alt="Website logo"
          height={41}
          width={50}
          className="md:w-auto  w-8 h-8"
        />
        <h2 className="lg:text-[34px]/[49px] md:text-3xl text-2xl font-bold font-montserrat mt-1">
          Furniro
        </h2>
      </div>

      {/* nav bar */}
      <div className="md:hidden absolute top-9 right-1">
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
        } md:flex flex-col md:flex-row md:gap-10 absolute md:relative top-16 lg:right-96 right-1 md:right-64 md:top-0 bg-white md:bg-transparent w-[100px] md:w-auto text-sm lg:text-base font-medium font-poppins z-20`}
      >
        <li>
          <Link
            href="/"
            className="block p-3 md:p-0 hover:underline active:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/shop"
            className="block p-3 md:p-0 hover:underline active:underline"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="block p-3 md:p-0 hover:underline active:underline"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block p-3 md:p-0 hover:underline active:underline"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex gap-2 lg:gap-3 items-center absolute right-12">
        <Link href={""}>
          <Image
            src={"/profile-icon.png"}
            alt="Profile icon"
            width={23.33}
            height={18.67}
          />
        </Link>
        <Link href={""}>
          <Image
            src={"/icon-search.png"}
            alt="Search Icon"
            height={22.17}
            width={22.17}
          />
        </Link>
        <Link href={""}>
          <Image
            src={"/heart.png"}
            alt="Heart Icon"
            height={26.81}
            width={35.33}
          />
        </Link>
        {/* <Link href={""}><Image src={"/shopping-cart.png"} alt="Shopping Cart" height={22.06} width={24.53}/></Link> */}

        {/* test */}

        <div className="relative">
          {/* Cart Icon */}
          <Link href={"#"} onClick={togglePopup}>
            <Image
              src="/shopping-cart.png"
              alt="Shopping Cart"
              height={22}
              width={25}
              className="cursor-pointer"
            />
          </Link>

          {/* Popup */}
          {isOpen && (
            <div className="
            absolute xxl:-right-28 lg:-right-10 -right-10  xxl:-top-10
             xl:w-[417px] lg:w-[370px] w-[320px] xl:h-[746px] lg:h-[650px] h-[600px]
              lg:py-5 lg:px-5 px-2 py-5  bg-[#fdfbfb] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between px-1">
                  <h3 className="font-semibold md:text-2xl/9 text-xl font-poppins">Shopping Cart</h3>
                  <button
                    onClick={togglePopup}
                    className=" text-gray-500 hover:text-black"
                  >
                    <Image src={"/cart-cross.png"} alt="exit icon" height={19} width={16.63}/>
                  </button>

                  {/* Title */}

                </div>

                <hr className="mb-10 mt-6 w-72"/>


                {/* Cart Items */}
                <div className="flex flex-col gap-4">
                  {/* Cart Item 1 */}
                  <div className="flex items-center lg:gap-8 gap-4">
                    <Image
                      src="/cart-product.png" // Internal image
                      alt="Asgaard Sofa"
                      width={105}
                      height={105}
                      className="rounded-md"
                    />
                    <div className="flex flex-col items-center">
                      <h4 className="font-normal lg:text-base text-sm font-poppins">Asgaard Sofa</h4>
                      <span className="flex items-center gap-2">
                        <p className="font-poppins font-light lg:text-base text-sm">1</p>
                        <p className="font-poppins font-light text-xs/[18px] ">x</p>
                        <p className="font-poppins font-medium text-xs/[18px] text-[#B88E2F]">Rs. 250,000.00</p>
                      </span>
                    </div>
                    <span className="h-5 w-5 bg-[#9F9F9F] ml-4 text-white rounded-full flex items-center justify-center text-[10px] hover:cursor-pointer">&#10005;</span>
                  </div>

                  {/* Cart Item 2 */}
                  <div className="flex items-center lg:gap-8 gap-4">
                  <Image
                      src="/asgaard-sofa-2.png" // Internal image
                      alt="Asgaard Sofa"
                      width={105}
                      height={105}
                      className="rounded-md"
                    />
                    <div className="flex flex-col items-center">
                      <h4 className="font-normal lg:text-base text-sm font-poppins">Casaliving Wood</h4>
                      <span className="flex items-center gap-2">
                        <p className="font-poppins font-light lg:text-base text-sm">1</p>
                        <p className="font-poppins font-light text-xs/[18px] ">x</p>
                        <p className="font-poppins font-medium text-xs/[18px] text-[#B88E2F]">Rs. 270,000.00</p>
                      </span>
                    </div>
                    <span className="h-5 w-5 bg-[#9F9F9F] ml-4 text-white rounded-full flex items-center justify-center text-[10px] hover:cursor-pointer">&#10005;</span>
                  
                  </div>
                </div>
              </div>



              <div className="space-y-6">
                <span className="flex gap-24">
                  <p className="text-base font-poppins font-normal">Subtotal</p>
                  <p className="text-base font-poppins font-semibold text-[#B88E2F]">Rs. 520,000.00</p>
                </span>

                <hr className="-mx-5"/>

                <span className="flex xl:gap-5 lg:gap-4 gap-1 pt-2">
                  <Link href={"/cart"}><button className="w-[87px] h-[30px] border border-black rounded-[50px] font-poppins font-normal text-xs/[18px]">Cart</button></Link>
                  <Link href={"/checkout"}><button className="xl:w-[118px] lg:w-[105px] w-[95px] h-[30px] border border-black rounded-[50px] font-poppins font-normal text-xs/[18px]">Checkout</button></Link>
                  <Link href={"/product-comparison"}><button className="xxl:w-[130px] xl:w-[125px] lg-w-[120px] w-[115px] h-[30px] border border-black rounded-[50px] font-poppins font-normal text-xs/[18px]">Comparison</button></Link>
                </span>
              </div>       

            </div>
          )}
        </div>

        {/* test */}

      </div>
    </header>
  );
}