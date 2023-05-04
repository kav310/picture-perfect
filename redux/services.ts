import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPhotographers = createAsyncThunk(
    'photographers/fetchPhotographers',
    async () => {
        try {
            const res = await axios.get(`https://determined-cuff-links-ox.cyclic.app/data`);
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
)
export const fetchFilteredPhotographers = createAsyncThunk(
    'photographers/fetchFilteredPhotographers',
    async (selectedProfession: String) => {
        try {
            const res = await axios.get(`https://determined-cuff-links-ox.cyclic.app/data?professional=${selectedProfession}`);
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }
)
export const fetchPhotographerDetails = createAsyncThunk(
    'photographers/fetchPhotographerDetails',
    async (photographerId: any) => {
        try {
            const res = await axios.get(`https://determined-cuff-links-ox.cyclic.app/data/${photographerId}`);
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }
)