import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart_slice";
 import uiSlice from'./UI_slice'

  const store=configureStore({

    reducer:{ui:uiSlice.reducer,cart:cartSlice.reducer}
})

export default store;