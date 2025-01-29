"use client";
import React from "react";
import {
  unlikeProduct,
  getLikedProducts,
  addToCart,
} from "../../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../../types/product";
import { urlFor } from "@/sanity/lib/image";

const Like = () => {
  const like = useAppSelector(getLikedProducts);
  const dispatch = useAppDispatch();

  const handleRemove = (productId: string) => {
    dispatch(unlikeProduct(productId));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-serif my-3 font-bold text-center mb-10">
        WishList Products
      </h1>
      {like.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No liked products yet!</p>
          <Link href="/shop">
            <p className="text-blue-500 underline">Browse products</p>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7 w-full">
          {like.map((element: Product) => (
            <div
              key={element._id}
              className="relative border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative w-full h-[300px]">
                {element.productImage && (
                  <Image
                    src={urlFor(element.productImage).url()}
                    alt={element.title}
                    className="w-full h-full object-cover"
                    height={300}
                    width={300}
                  />
                )}
                {element.isNew && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-sm px-2 py-1 rounded">
                    New
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">{element.title}</h4>
                <p className="text-gray-700 mb-2">${element.price}</p>
                <button
                  onClick={() => dispatch(addToCart(element))}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded mb-2"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemove(element._id)}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Like;