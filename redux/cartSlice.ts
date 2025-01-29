"use client";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface CartSate {
  cart: any;
  likedProducts: any[]; 
  comparison: any[]; 
  notification: string; 
}

const initialState: CartSate = {
  cart: [],
  likedProducts: [],
  comparison: [],
  notification: "",
};





const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // multiple actions
    addToCart: (state, action) => {
      const isPresent = state.cart.find((item: any) => {
        return item._id == action.payload._id;
      });
      if (isPresent) {
        // update the quantity not add one more product
        state.cart = state.cart.map((item: any) => {
          return item._id == action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromTheCart: (state, action) => {
      state.cart = state.cart.filter((item: any) => {
        return item._id !== action.payload;
      });
    },
    incrementQuantity: (state, action) => {
      state.cart = state.cart.map((item: any) => {
        return item._id == action.payload._id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    },
    decrementQuantity: (state, action) => {
      state.cart = state.cart.map((item: any) => {
        return item._id == action.payload._id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    },
    likeProduct: (state, action) => {
      const isLiked = state.likedProducts.find(
        (item: any) => item._id === action.payload._id
      );
      if (!isLiked) {
        state.likedProducts.push(action.payload); // Add to liked products
      }
    },
    unlikeProduct: (state, action) => {
      state.likedProducts = state.likedProducts.filter(
        (item: any) => item._id !== action.payload
      );
    },
    addToComparison: (state, action) => {
      if (state.comparison.length >= 2) {
        state.notification = "You can only compare 2 products at a time.";
      } else {
        state.comparison.push(action.payload);
        state.notification = ""; // Clear notification if successful
      }
    },
    removeFromComparison: (state, action) => {
      state.comparison = state.comparison.filter(
        (product) => product._id !== action.payload
      );
      state.notification = ""; // Clear notification on removal
    },
    clearComparison: (state) => {
      state.comparison = [];
      state.notification = ""; // Clear notification on clear
    },
  },
});

export const {
  addToCart,
  removeFromTheCart,
  incrementQuantity,
  decrementQuantity,
  likeProduct,
  unlikeProduct,
  addToComparison,
  removeFromComparison,
  clearComparison,
} = cartSlice.actions;

export const getCart = (state: RootState) => state.cart.cart;
export const getLikedProducts = (state: RootState) => state.cart.likedProducts;
export const getComparison = (state: RootState) => state.cart.comparison; // Selector for comparison
export const getNotification = (state: RootState) => state.cart.notification; // Selector for notification;

export default cartSlice.reducer;