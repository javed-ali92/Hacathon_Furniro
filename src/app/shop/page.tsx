"use client";
import Image from "next/image";
import CustomerCare from "@/components/Customer-Care";
import Banner from "@/components/Banner";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/product";
import { allProduct } from "../../sanity/lib/quries";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { addToCart, likeProduct, addToComparison } from "../../../redux/cartSlice";

export default function Shop() {
  // Redux Dispatch
  const dispatch = useAppDispatch();
  
  // Product State
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch Product Data with Fallback
  useEffect(() => {
    async function productData() {
      try {
        const productFetchData: Product[] = await client.fetch(allProduct);
        setProduct(productFetchData);
      } catch  {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    productData();
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <Banner name="Shop" logo="/logo.png" title="Shop" />

      {/* Filter & Sorting Section */}
      <div className="h-auto mb-8 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-4 bg-[#F9F1E7]">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <Image src="/filtering.png" alt="filter" height={25} width={25} />
            <p className="font-poppins text-base md:text-xl font-normal">Filter</p>
          </div>
          <div className="flex gap-4">
            <Image src="/view-list.png" alt="view all" height={25} width={25} />
            <Image src="/grid-round.png" alt="grid view" height={25} width={25} />
          </div>
          <div className="w-full lg:w-[220px] h-auto flex justify-center lg:justify-end items-center border-t lg:border-l border-[#9F9F9F] pt-2 lg:pt-0">
            <p className="font-poppins text-sm md:text-base font-normal text-center lg:text-left">
              Showing 1–16 of 32 results
            </p>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="xl:w-[1236px] w-auto mx-auto px-4 py-6 text-center">
        {loading ? (
          <div className="flex items-center justify-center space-x-2">
  <svg className="animate-spin h-5 w-5 text-[#dbab39]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
  </svg>
  <p className="text-[#dbab39] font-bold text-lg">Loading products...</p>
</div>        ) : error ? (
          <p className="text-red-500 font-bold">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {product.map((element: Product) => (
              <div key={element._id}>
                <Link href={`/shop/${element._id}`}>
                  <div className="relative w-[250px] xs:w-[280px] mx-auto group">
                    <div className="relative transition-opacity duration-300">
                      <div className="relative w-full h-[280px] md:h-[301px]">
                        {element.productImage && (
                          <Image
                            src={urlFor(element.productImage).url()}
                            alt={element.title}
                            className="rounded-lg w-full md:h-[320px] h-[280px]"
                            height={391}
                            width={481}
                          />
                        )}
                        {element.isNew && (
                          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full text-sm sm:text-base font-medium bg-[#5ea054] text-white absolute top-3 right-3 flex justify-center items-center">
                            New
                          </div>
                        )}
                      </div>
                      <div className="bg-[#F4F5F7] p-4 sm:p-6">
                        <h4 className="font-semibold text-lg sm:text-2xl font-poppins">{element.title}</h4>
                        <div className="flex items-center justify-between mt-2 sm:mt-3">
                          <p className="font-poppins font-semibold text-base sm:text-xl">${element.price}</p>
                        </div>
                      </div>
                    </div>

                    {/* Overlay Section */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4 p-4 sm:p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => dispatch(addToCart(element))}
                        className="text-[#D89E00] w-[200px] h-12 bg-white font-semibold text-sm sm:text-base rounded-lg"
                      >
                        Add to cart
                      </button>

                      {/* Overlay Actions */}
                      <div className="flex justify-between w-full sm:w-[80%] lg:w-[202px]">
                        <Link href={"/share"}>
                          <div className="flex items-center gap-1 text-white cursor-pointer">
                            <Image src={"/share.png"} alt="Share" height={16} width={16} />
                            <p className="text-xs sm:text-sm font-medium font-poppins">Share</p>
                          </div>
                        </Link>
                        <button
                          onClick={() => dispatch(addToComparison(element))}
                          className="flex items-center gap-1 text-white cursor-pointer"
                        >
                          <Image src={"/compare.png"} alt="Compare" height={16} width={16} />
                          <p className="text-xs sm:text-sm font-medium font-poppins">Compare</p>
                        </button>
                        <button
                          onClick={() => dispatch(likeProduct(element))}
                          className="flex items-center gap-1 text-white cursor-pointer"
                        >
                          <Image src={"/heart-white.png"} alt="Like" height={16} width={16} />
                          <p className="text-xs sm:text-sm font-medium font-poppins">Like</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Customer Care Section */}
      <CustomerCare />
    </div>
  );
}
