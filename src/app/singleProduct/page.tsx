"use client";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import ProductCard from "@/components/Product-Card";
import Link from "next/link";


export default function SingleProduct() {
  // count product
  const [count, setCount] = useState(1);



  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      {/* head section start*/}
      <div className="bg-[#F9F1E7] ">
        <div className="h-[100px] max-w-[1400px] pl-2 gap-4 md:gap-8 flex items-center xl:pl-12 mx-auto">
          <div className=" flex gap-4 items-center">
            <p className="font-poppins text-base font-normal text-[#9F9F9F]">
              Home
            </p>
            <FaChevronRight />
          </div>

          <div className=" flex gap-4 items-center">
            <p className="font-poppins text-base font-normal text-[#9F9F9F]">
              Shop
            </p>
            <FaChevronRight />
          </div>

          <div className="border-l items-center h-[40px] w-[120px] flex justify-end border-gray-700 pt-2 lg:pt-0">
            <p className="text-sm md:text-base text-center lg:text-left">
              Asgaard sofa
            </p>
          </div>
        </div>
      </div>
      {/* head section end*/}

      {/* single product section start */}
      <div>
        <div className="mx-auto max-w-[1400px] gap-6 lg:gap-16 h-auto xl:h-[820px] px-10 py-6 flex md:flex-row flex-col">
          {/* image section start  */}
          <div className="lg:w-[553px] w-auto h-[500px] flex lg:flex-row flex-col lg:gap-5 md:gap-3 gap-2">
            <div className="lg:w-[76px] w-auto h-[416px] lg:flex lg:flex-col flex flex-row gap-2 lg:gap-8">
              <span className="w-[76px] h-[80px] rounded-md flex items-center bg-[#F9F1E7]">
                <Image
                  src={"/product-1.png"}
                  alt="related images"
                  height={80}
                  width={76}
                />
              </span>
              <span className="w-[76px] h-[80px] rounded-md flex items-center bg-[#F9F1E7]">
                <Image
                  src={"/product-2.png"}
                  alt="related images"
                  height={80}
                  width={76}
                />
              </span>
              <span className="w-[76px] h-[80px] rounded-md flex items-center bg-[#F9F1E7]">
                <Image
                  src={"/product-3.png"}
                  alt="related images"
                  height={80}
                  width={76}
                />
              </span>
              <span className="w-[76px] h-[80px] rounded-md flex items-center bg-[#F9F1E7]">
                <Image
                  src={"/product-4.png"}
                  alt="related images"
                  height={80}
                  width={76}
                />
              </span>
            </div>

            <div className="lg:h-[500px] h-[280px] lg:w-[423px] xs:w-[324px] w-[280px] bg-[#F9F1E7] flex justify-center items-center rounded-xl">
              <Image
                src={"/Asgaard-sofa.png"}
                alt="Single Images"
                className="rounded-lg"
                height={391}
                width={481}
              />
            </div>
          </div>
          {/* image section end */}

          {/* details section start */}
          <div className="h-auto xl:h-[730px] lg:w-[606px] w-auto flex flex-col gap-4">
            <h2 className="font-poppins font-normal text-[42px]/[63px]">
                Asgaard sofa
           </h2>

            <p className="text-[#9F9F9F] font-poppins font-medium text-2xl/9 ">
            Rs. 250,000.00
            </p>

            <div className="flex gap-5 items-center">
              <Image src={"/rating.png"} alt="rating" width={124} height={20} />
              <div className="border-l items-center h-[30px] w-[140px] flex justify-end border-gray-700 pt-2 lg:pt-0">
                <p className="text-[#9F9F9F] text-[13px]/[19px] font-normal font-poppins">
                  5 Customer Review
                </p>
              </div>
            </div>

            <p className="text-[13px]/[19px] font-normal w-auto lg:w-[424px] font-poppins">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            {/* size */}
            <div className="w-[123px] h-[63px] flex flex-col justify-between mt-3">
              <p className="font-normal font-poppins text-[#9F9F9F] text-sm/[21px]">
                Size
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center text-white w-[30px] h-[30px] rounded-sm bg-[#B88E2F]"
                >
                  L
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-[30px] h-[30px] rounded-sm hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7]"
                >
                  XL
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-[30px] h-[30px] rounded-sm hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7]"
                >
                  XS
                </button>
              </div>
            </div>
            {/* color */}
            <div className="w-[123px] h-[63px] flex flex-col justify-between">
              <p className="font-normal font-poppins text-[#9F9F9F] text-sm/[21px]">
                Color
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="w-[30px] h-[30px] rounded-full bg-[#816DFA]"
                ></button>
                <button
                  type="button"
                  className="w-[30px] h-[30px] rounded-full bg-black"
                ></button>
                <button
                  type="button"
                  className="w-[30px] h-[30px] rounded-full bg-[#B88E2F]"
                ></button>
              </div>
            </div>
            {/* button */}
            <div className="flex flex-col xl:flex-row gap-5 mt-4">
              <span className="h-16 w-[123px] border gap-8 border-[#9F9F9F] text-base font-medium rounded-md flex items-center justify-center">
                <button type="button" onClick={decrement}>
                  -
                </button>
                <p>{count}</p>
                <button type="button" onClick={increment}>
                  +
                </button>
              </span>
              <Link href={"/cart"}>
                <button
                    type="button"
                    className="h-16 w-[215px] border gap-5 border-black text-xl/[30px] font-medium rounded-md flex items-center justify-center"
                >
                    Add To Cart
                </button>
              </Link>
              <Link href={"/product-comparison"}>
                <button
                  type="button"
                  className="h-16 w-[215px] border gap-5 border-black text-xl/[30px] font-medium rounded-md flex items-center justify-center"
                >
                  + Compare
                </button>
              </Link>
            </div>

            <hr className="mt-10 mb-6" />

            <div className="flex flex-col gap-3">
              <span className="flex gap-2 font-poppins text-base text-[#9F9F9F] ">
                <p className="w-[75px]">SKU</p>
                <span className="flex gap-2">
                  <p>:</p>
                  <p>SS001</p>
                </span>
              </span>
              <span className="flex gap-2 font-poppins text-base text-[#9F9F9F] ">
                <p className="w-[75px]">Category</p>
                <span className="flex gap-2">
                  <p>:</p>
                  <p>Sofas</p>
                </span>
              </span>
              <span className="flex gap-2  font-poppins text-base text-[#9F9F9F] ">
                <p className="w-[75px]">Tags</p>
                <span className="flex gap-2">
                  <p>:</p>
                  <p>Sofa, Chair, Home, Shop</p>
                </span>
              </span>
              <span className="flex gap-2  font-poppins text-base text-[#9F9F9F] ">
                <p className="w-[75px]">Share</p>
                <span className="flex gap-3">
                  <p>:</p>
                  <span className="flex gap-5 items-center">
                    <Image
                      src={"/facebook.png"}
                      alt="facebook icon"
                      height={20}
                      width={20}
                    />
                    <Image
                      src={"/linkedin.png"}
                      alt="linkedin icon"
                      height={20}
                      width={20}
                    />
                    <Image
                      src={"/twitter.png"}
                      alt="twitter icon"
                      height={21}
                      width={21}
                    />
                  </span>
                </span>
              </span>
            </div>
          </div>
          {/* details section end */}
        </div>
      </div>
      {/* single product section end */}

      <hr />

      {/* details, additional information section start */}
      <div className="max-w-[1440px] mx-auto space-y-10 py-10 px-4 md:px-8">
        {/* Tabs Section */}
        <div className="w-full max-w-[649px] flex justify-between items-center mx-auto flex-wrap">
          <h3 className="text-xl md:text-2xl font-poppins font-medium">
            Description
          </h3>
          <h3 className="text-xl md:text-2xl font-poppins font-normal text-[#9F9F9F]">
            Additional Information
          </h3>
          <h3 className="text-xl md:text-2xl font-poppins font-normal text-[#9F9F9F]">
            Reviews [5]
          </h3>
        </div>

        {/* Description Section */}
        <div className="w-full max-w-[1026px] mx-auto flex flex-col space-y-6 mt-20">
          <p className="font-poppins text-sm md:text-base font-normal text-[#9F9F9F] leading-relaxed">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="font-poppins text-sm md:text-base font-normal text-[#9F9F9F] leading-relaxed">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mx-auto items-center w-full max-w-[1239px]">
          <Image
            src="/sofa-1.png"
            alt="sofa image"
            className="w-full lg:w-[48%] h-auto object-cover"
            height={348}
            width={605}
          />
          <Image
            src="/sofa-2.png"
            alt="sofa image"
            className="w-full lg:w-[48%] h-auto object-cover"
            height={348}
            width={605}
          />
        </div>
      </div>
      {/* details, additional information section end */}

      <hr />

      {/* related product section start */}
      <div className="max-w-[1440px] mx-auto py-16 space-y-10">
        <h2 className="text-4xl/[54px] font-medium font-poppins text-center">
          Related Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto w-fit">
          <ProductCard
            image="/image-1.png"
            name="Syltherine"
            description="Stylish cafe chair"
            discountedPrice="Rp 2.500.000"
            originalPrice="Rp 3.500.000"
            discountBgColor="bg-[#E97171]"
            discount="-30%"
          />

          <ProductCard
            image="/images-2.png"
            name="Leviosa"
            description="Stylish cafe chair"
            discountedPrice="Rp 2.500.000"
          />

          <ProductCard
            image="/images-3.png"
            name="Lolito"
            description="Luxury big sofa"
            discountedPrice="Rp 7.000.000"
            originalPrice="Rp 14.000.000"
            discountBgColor="bg-[#E97171]"
            discount="-50%"
          />

          <ProductCard
            image="/image-4.png"
            name="Respira"
            description="Outdoor bar table and stool"
            discountedPrice="Rp 500.000"
            discountBgColor="bg-[#2EC1AC]"
            discount="New"
          />
        </div>

        {/* button start */}
        <div className="flex justify-center">
          <Link href="/shop">
            <button
              type="button"
              className=" w-[245px] h-[48px] border border-[#B88E2F] hover:bg-[#FCF8F3] text-[#B88E2F] font-semibold text-base font-poppins items-center justify-center"
            >
              Show More
            </button>
          </Link>
        </div>
        {/* button end */}
      </div>

      {/* related product section end */}

      <hr />


    </div>
  );
}