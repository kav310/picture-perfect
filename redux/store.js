import { configureStore } from "@reduxjs/toolkit";
import covidTrackerSlice from "./slice"

const store = configureStore({
    reducer: {
        covidTracker: covidTrackerSlice
    }
})

export default store;