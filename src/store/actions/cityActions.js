import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'https://mytinerary-back-morganaalemann.onrender.com'; 

export const get_cities = createAsyncThunk('get_cities', async () => {
    try {
        const response = await axios.get(`${baseURL}/api/cities`);
        return response.data.cities;
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error; 
    }
});

export const filter_cities = createAsyncThunk('filter_cities', async (filters) => {
    try {
        const { name, country } = filters;
        const query = new URLSearchParams();
        if (name) query.append('name', name);
        if (country) query.append('country', country);

        const response = await axios.get(`${baseURL}/api/cities?${query.toString()}`);
        return response.data.cities;
    } catch (error) {
        console.error('Error fetching filtered cities:', error);
        return []; 
    }
});
