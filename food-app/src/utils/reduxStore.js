import { configureStore } from "@reduxjs/toolkit";

import cartSlice from './cartSlices';

const cartStore = configureStore({
    reducer:{
        cart:cartSlice
    }
});

export default cartStore;