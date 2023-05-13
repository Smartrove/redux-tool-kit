import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

//cart slice reducer
const cartSlice = createSlice({
  name: "cart", //slice name
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      //first method
      // state.cartItems.splice(itemId, 1);

      //second method
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseItemCount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseItemCount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotalAmount: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.map((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

// console.log(cartSlice);
export const {
  clearCart,
  removeItem,
  increaseItemCount,
  decreaseItemCount,
  calculateTotalAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
