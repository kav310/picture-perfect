import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredPhotographers, fetchPhotographers, fetchPhotographerDetails } from "./services"

const initialState = {
    photographers: [],
    selectedProfession: null,
    filteredPhotographers: [],
    photographerDetails: [],
    photographerId: null,
    status: "idle",
    error: null
}

const photographersSlice = createSlice({
    name: "photographers",
    initialState,
    reducers: {
        setselectedProfession: (state, action) => {
            state.selectedProfession = action.payload;
            state.photographerId = action.payload;
        }
    },
    extraReducers: {
          [fetchFilteredPhotographers.pending ]: (state) => {
            state.status = 'loading';
          },
          [fetchFilteredPhotographers.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.filteredPhotographers = action.payload;
          },
          [fetchFilteredPhotographers.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          },
          [fetchPhotographers.pending ]: (state) => {
            state.status = 'loading';
            state.error = null;
          },
          [fetchPhotographers.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.photographers = action.payload;
          },
          [fetchPhotographers.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          },
          [fetchPhotographerDetails.pending ]: (state) => {
            state.status = 'loading';
            state.error = null;
          },
          [fetchPhotographerDetails.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.photographerDetails = action.payload;
          },
          [fetchPhotographerDetails.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          },
      }
})

export const { setselectedProfession } = photographersSlice.actions

export default photographersSlice.reducer