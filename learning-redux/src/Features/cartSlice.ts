import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItems {
  id: number;
  title: string;
}

interface CartState {
  cartItems: CartItems[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItems>) => {
      const newCartAdd = {
        id: state.cartItems[state.cartItems.length - 1] + 1,
        title: action.payload,
      };

      state.cartItems.push(newCartAdd);
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart.id !== action.payload,
      );
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
