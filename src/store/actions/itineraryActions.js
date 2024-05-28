import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_itineraries = createAsyncThunk('get_itineraries', async () => {
    try {
        const response = await axios.get('https://mytinerary-back-morganaalemann.onrender.com/api/itineraries')

        return {
            itineraries: response.data.itineraries
        }
    } catch (error) {
        console.log(error)
    }
})

