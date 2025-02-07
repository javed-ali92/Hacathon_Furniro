"use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useAppDispatch } from "../../../../hooks/redux";
import {
  addToCart,
  addToComparison,
  likeProduct,
} from "../../../../redux/cartSlice";

const SearchResult = () => {
  // add to cart
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const { query: rawQuery } = useParams();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProductData = async () => {
      if (!rawQuery || typeof rawQuery !== "string") {
        setError("Invalid query parameter.");
        console.error("Invalid query parameter:", rawQuery);
        setLoading(false);
        return;
      }
  
      try {
        setLoading(true);
        // Decode the query string to handle spaces and special characters
        const decodedQuery = decodeURIComponent(rawQuery)
          .replace(/\s+/g, "-")
          .toLowerCase();
        // Fetch product data using Sanity client
        const productFetchData: Product[] = await client.fetch(
          groq`*[_type == "product" && (title match $decodedQuery || $decodedQuery in tags[])]{
            _id,
            title,
            isNew,
            description,
            discountPercentage,
            price,
            productImage,
            tags
          }`,
          { decodedQuery }
        );
  
        if (productFetchData.length > 0) {
          setProducts(productFetchData);
          setError(null); // Clear any previous errors
        } else {
          setProducts([]);
          setError(`No products found for "${decodedQuery}".`);
        }
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    // Only fetch data if the query is valid
    if (rawQuery && typeof rawQuery === "string") {
      fetchProductData();
    } else {
      setError("Invalid query parameter.");
      setLoading(false);
    }
  }, [rawQuery]);
  
  // Handle error state
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="font-poppins text-lg text-red-600">{error}</p>
      </div>
    );
  }

    
    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-gray-300 border-t-[#4A90E2] rounded-full animate-spin"></div>
          {/* Loading Text */}
          <p className="mt-4 font-poppins text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  if (!products || products.length === 0) {
    return <div>No products found for &quot;{rawQuery}&quot;.</div>;
  }
  
  return (
    <div>
      <div className="p-8">
        <h1 className="text-2xl font-bold">
          Search Results for {rawQuery} &quot;{products.length}&quot;
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto w-fit">
        {products.map((element: Product) => (
          <div key={element._id}>
            <Link href={`/shop/${element._id}`}>
              <div className="relative w-[250px] xs:w-[280px] mx-auto group">
                <div className="flex flex-col relative transition-opacity duration-300">
                  {/* Image Section */}
                  <div className="relative w-full h-[280px] md:h-[301px]">
                    {element.productImage && (
                      <Image
                        src={urlFor(element.productImage).url()}
                        alt="Single Images"
                        className="rounded-lg w-full md:h-[320px] h-[280px]"
                        height={391}
                        width={481}
                      />
                    )}
                    {/* tag of the product like New  and sale prcentag*/}
                    <div
                      className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full text-sm sm:text-base font-medium ${
                        element.isNew ? `bg-[#5ea054] text-white` : "hidden"
                      } absolute top-3 right-3 flex justify-center items-center`}
                    >
                      New
                    </div>
                  </div>

                  {/* Product Info Section */}
                  <div className="bg-[#F4F5F7] p-4 sm:p-6 flex-grow">
                    <h4 className="font-semibold text-lg sm:text-2xl font-poppins">
                      {element.title}
                    </h4>
                    {/* <p className="text-sm sm:text-base font-medium text-[#898989] mt-1">
                        {element.description}
                      </p> */}
                    <div className="flex items-center justify-between mt-2 sm:mt-3">
                      <p className="font-poppins font-semibold text-base sm:text-xl">
                        ${element.price}
                      </p>
                      {/* {element.price && (
                          <p className="font-poppins font-normal text-sm sm:text-base line-through text-[#B0B0B0]">
                            ${element.price}
                          </p>
                        )} */}
                    </div>
                  </div>
                </div>

                {/* Overlay Section */}
                <div
                  className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4 p-4 sm:p-6 transition-opacity duration-300 ${
                    element.showOverlay || "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <Link href={""}>
                    <button
                      onClick={() => {
                        dispatch(addToCart(element));
                      }}
                      type="button"
                      className="text-[#D89E00] w-[150px] xs:w-[200px] lg:w-[202px] h-12 bg-white font-semibold text-sm sm:text-base rounded-lg"
                    >
                      Add to cart
                    </button>
                  </Link>

                  {/* Overlay Actions */}
                  <div className="flex justify-between w-full sm:w-[80%] lg:w-[202px]">
                    {/* Share */}
                    <Link href={"/share"}>
                      <div className="flex items-center gap-1 text-white cursor-pointer">
                        <Image
                          src={"/share.png"}
                          alt="Share Icon"
                          height={16}
                          width={16}
                        />
                        <p className="text-xs sm:text-sm font-medium font-poppins">
                          Share
                        </p>
                      </div>
                    </Link>

                    {/* Compare */}
                    <Link
                      href={"/product-comparison"}
                      onClick={() => {
                        dispatch(addToComparison(element));
                      }}
                    >
                      <div className="flex items-center gap-1 text-white cursor-pointer">
                        <Image
                          src={"/compare.png"}
                          alt="Compare Icon"
                          height={16}
                          width={16}
                        />
                        <p className="text-xs sm:text-sm font-medium font-poppins">
                          Compare
                        </p>
                      </div>
                    </Link>

                    {/* Like */}
                    <Link
                      href={""}
                      onClick={() => {
                        dispatch(likeProduct(element));
                      }}
                    >
                      <div className="flex items-center gap-1 text-white cursor-pointer">
                        <Image
                          src={"/heart-white.png"}
                          alt="Like Icon"
                          height={16}
                          width={16}
                        />
                        <p className="text-xs sm:text-sm font-medium font-poppins">
                          Like
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;