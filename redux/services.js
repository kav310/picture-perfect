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
    // 'covidTracker/fetchCountryData',
    // async (selectedCountry) => {
    //     try {
    //         const res = await axios.get(`${process.env.BASE_URL}/country/${selectedCountry}`);
    //         return res.data[res.data.length - 1];
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
)