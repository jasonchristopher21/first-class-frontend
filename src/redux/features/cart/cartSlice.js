import { createSlice } from "@reduxjs/toolkit";
import dummy_food_img from "../../../assets/dummy_food_img.png";

// TODO: Change initial state to empty array
const initialState = [
  {
    image: dummy_food_img,
    name: "Signature Laksa",
    price: "8.50",
    qty: 1,
  },
];

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
      existingItem.quantity++;
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem.quantity === 1) {
        return state.filter((item) => item.name !== action.payload.name);
      } else {
        existingItem.quantity--;
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
