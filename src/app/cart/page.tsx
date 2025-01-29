"use client";
import Banner from "@/components/Banner";
import CustomerCare from "@/components/Customer-Care";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  decrementQuantity,
  getCart,
  incrementQuantity,
  removeFromTheCart,
} from "../../../redux/cartSlice";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/product";

export default function Cart() {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  // calculate total price
  let totalPrice = 0;
  cart.forEach((item: Product) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div>
      <Banner name="Cart" title="Cart" logo="/logo.png" />

      <div className="h-auto flex justify-center items-center px-4 md:px-6 lg:px-0 my-5">
        <div className="w-full lg:w-[1240px] flex flex-col xl:items-start items-center xl:flex-row justify-between gap-8">
          {/* Product Section */}
          <div className="w-full lg:w-[65%] flex flex-col">
            {/* Header */}
            <div className="h-14 bg-[#F9F1E7] flex items-center px-4 lg:px-10 gap-4">
              <p className="font-poppins font-medium text-sm lg:text-base flex-1">
                Product
              </p>
              <p className="font-poppins font-medium text-sm lg:text-base flex-1 text-center">
                Price
              </p>
              <p className="font-poppins font-medium text-sm lg:text-base flex-1 text-center">
                Quantity
              </p>
              <p className="font-poppins font-medium text-sm lg:text-base flex-1 text-center">
                Subtotal
              </p>
            </div>

            {/* Products */}
            <div className="flex flex-col gap-6 mt-4">
              {cart.map((val: Product, index: number) => (
                <div
                  key={index}
                  className="h-auto flex flex-col sm:flex-row items-center gap-4 bg-white shadow-md p-4 rounded-lg"
                >
                  {/* Product Image */}
                  <Image
                    src={urlFor(val.productImage).url()}
                    alt="product image"
                    height={105}
                    width={108}
                    className="object-contain rounded-md"
                  />

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col sm:flex-row gap-6 items-center lg:items-start justify-between">
                    <p className="font-poppins text-sm lg:text-base font-medium text-gray-600">
                      {val.title}
                    </p>
                    <p className="font-poppins text-sm lg:text-base font-medium text-gray-600">
                      ${val.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-1">
                      <button
                        onClick={() => {
                          if (val.quantity > 1) {
                            dispatch(decrementQuantity(val));
                          }
                        }}
                        className="text-lg font-bold"
                      >
                        -
                      </button>
                      <p className="text-base">{val.quantity}</p>
                      <button
                        onClick={() => {
                          dispatch(incrementQuantity(val));
                        }}
                        className="text-lg font-bold"
                      >
                        +
                      </button>
                    </div>

                    <p className="font-poppins text-sm lg:text-base font-medium">
                      ${val.price * val.quantity}
                    </p>
                    {/* Delete Button */}
                    <button
                      onClick={() => {
                        dispatch(removeFromTheCart(val._id));
                      }}
                    >
                      <Image
                        src={"/delete.png"}
                        alt="delete product"
                        height={22}
                        width={22}
                        className="hover:cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Totals Section */}
          <div className="w-full lg:w-[35%] bg-[#F9F1E7] p-6 rounded-lg shadow-lg">
            <h3 className="font-poppins font-semibold text-2xl lg:text-3xl text-center">
              Cart Totals
            </h3>

            <div className="flex flex-col gap-6 mt-6">
              <div className="flex justify-between text-base lg:text-lg font-medium">
                <span>Subtotal</span>
                <span className="text-gray-600">${totalPrice}</span>
              </div>
              <div className="flex justify-between text-lg lg:text-xl font-medium">
                <span>Total</span>
                <span className="text-[#B88E2F]">${totalPrice}</span>
              </div>
            </div>

            <Link href={"/checkout"}>
              <button
                type="button"
                className="mt-6 w-full bg-black text-white py-3 rounded-lg text-lg lg:text-xl font-medium hover:bg-gray-800 transition"
              >
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>

      <CustomerCare />
    </div>
  );
}