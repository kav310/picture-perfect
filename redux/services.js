import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchCountryData = createAsyncThunk(
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
export const fetchCountries = createAsyncThunk(
    // 'covidTracker/countriesReceived',
    // async () => {
    //     try {
    //         const res = await axios.get(`${process.env.BASE_URL}/countries`);
    //         return res.data
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
)