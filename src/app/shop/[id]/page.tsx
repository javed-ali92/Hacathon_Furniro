"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import { fourProduct } from "../../../sanity/lib/quries";
import { useAppDispatch } from "../../../../hooks/redux";
import { addToCart, addToComparison, likeProduct } from "../../../../redux/cartSlice";

const Page = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    // Extract the dynamic ID from the URL path
    const path = window.location.pathname; // Example: /shop/123
    const extractedId = path.split("/").pop(); // Get the last segment of the URL

    if (extractedId) {
      setId(extractedId); // Update the state with the ID
    } else {
      setError("Product ID is missing.");
    }
  }, []); // Run once on component mount

  useEffect(() => {
    const fetchProductData = async () => {
      if (!id) return; // Wait until ID is available

      try {
        const productFetchData: Product[] = await client.fetch(
          groq`*[_type == "product" && _id == $id]{
            _id,
            title,
            isNew,
            description,
            discountPercentage,
            price,
            productImage,
            tags
          }`,
          { id }
        );

        if (productFetchData.length > 0) {
          setProduct(productFetchData[0]);
        } else {
          setError("No product found for the given ID.");
        }
      } catch (error: unknown) {
        if (
          error instanceof Error &&
          error.message.includes("NetworkError")
        ) {
          setError(
            "Network error. Please check your internet connection."
          );
        } else {
          setError(
            "Error fetching product data. Please try again later."
          );
        }
      }
    };

    fetchProductData();
  }, [id]); // Fetch product data whenever id changes

  const dispatch = useAppDispatch();
  const [relatedProduct, setRelatedProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function productData() {
      try {
        const productFetchData: Product[] = await client.fetch(fourProduct);
        setRelatedProduct(productFetchData);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    }
    productData();
  }, []);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-[#dbab39] rounded-full animate-spin"></div>
          <p className="mt-4 font-poppins text-lg text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <p className="mt-4 font-poppins text-lg text-red-600">{error}</p>
        </div>
      </div>
    );
  }


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
              {product?.title}
            </p>
          </div>
        </div>
      </div>
      {/* head section end*/}

      {/* single product section start */}
      <div>
        <div className="mx-auto max-w-[1400px] gap-6 lg:gap-16 h-auto xl:h-auto px-10 py-6 flex md:flex-row flex-col">
          {/* image section start  */}
          <div className="lg:w-[553px] w-auto h-auto flex lg:flex-row flex-col lg:gap-5 md:gap-3 gap-2">

            <div className="lg:h-[500px] h-[280px] lg:w-[423px] xs:w-[324px] w-[280px] bg-[#F9F1E7] flex justify-center items-center rounded-xl">
              {product?.productImage && (
                <Image
                  src={urlFor(product.productImage).url()}
                  alt="Single Images"
                  className="rounded-lg w-[400px] h-[430px]"
                  height={391}
                  width={481}
                />
              )}
            </div>
          </div>
          {/* image section end */}

          {/* details section start */}
          <div className="h-auto lg:w-[606px] w-auto flex flex-col gap-4">
            <h2 className="font-poppins font-normal text-[42px]/[63px]">
              {product?.title}
            </h2>

            <p className="text-[#9F9F9F] font-poppins font-medium text-2xl/9 ">
              ${product?.price}
            </p>

            <div className="flex gap-5 items-center">
              <Image src={"/rating.png"} alt="rating" width={124} height={20} />
              <div className="border-l items-center h-[30px] w-[140px] flex justify-end border-gray-700 pt-2 lg:pt-0">
                <p className="text-[#9F9F9F] text-[13px]/[19px] font-normal font-poppins">
                  5 Customer Review
                </p>
              </div>
            </div>
            {product?.description &&(
            <p className="text-[13px]/[19px] font-normal w-auto lg:w-[424px] font-poppins">
              {`${product.description.substring(0, 250)}...`}
            </p>
            )}

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
              <Link href={"/cart"}>
              <button
                onClick={() => {
                  dispatch(addToCart(product));
                }}
                type="button"
                className="h-16 w-[215px] border gap-5 border-black text-xl/[30px] font-medium rounded-md flex items-center justify-center"
              >
                Add To Cart
              </button>
              </Link>
              <Link href={"/product-comparison"}>
                <button
                onClick={() => {
                  dispatch(addToComparison(product));
                }}
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
          {relatedProduct.map((element: Product) => (
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
                          dispatch(addToCart(product));
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
                      <Link href={"/product-comparison"} onClick={() => {
                          dispatch(addToComparison(element));
                        }}>
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
                      <Link href={""}  onClick={() => {
                          dispatch(likeProduct(element));
                        }}>
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
};

export default Page;