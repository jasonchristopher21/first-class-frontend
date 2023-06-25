import { createSlice } from "@reduxjs/toolkit";
import dummy_food_img from "../../../assets/dummy_food_img.png";

// TODO: Change initial state to empty array
const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.find(
        (item) => item.name === action.payload.name
      );
      existingItem.qty++;
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem.qty === 1) {
        return state.filter((item) => item.name !== action.payload.name);
      } else {
        existingItem.qty--;
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart } =
  cartSlice.actions;
