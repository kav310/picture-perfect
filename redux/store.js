import { configureStore } from "@reduxjs/toolkit";
import photographersSlice from "./slice"

const store = configureStore({
    reducer: {
        photographers: photographersSlice
    }
})

export default store;