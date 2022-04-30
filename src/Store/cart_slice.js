import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed:false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    additemToCart(state, action) {
      const newitem = action.payload;
      const existingItem = state.items.find((item) => item.id === newitem.id);
      state.totalQuantity++;
      state.changed=true;
      if (!existingItem) {
        state.items.push({
          id: newitem.id,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
          name: newitem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newitem.price;
      }
    },
    removeitemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed=true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
