import { groq } from "next-sanity";

export const allProduct = groq`*[_type == "product"]{
  _id,
  title,
  isNew,
  description,
  discountPercentage,
  price,
  productImage,
  tags
}`;

export const EightProduct = groq`*[_type == "product"] | order(_createdAt desc)[0...8] {
    _id,
    title,
    isNew,
    description,
    discountPercentage,
    price,
    productImage,
    tags
  }`;

export const fourProduct = groq`*[_type == "product"] | order(_createdAt desc)[0...4] {
    _id,
    title,
    isNew,
    description,
    discountPercentage,
    price,
    productImage,
    tags
  }`