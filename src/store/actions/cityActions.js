import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_cities = createAsyncThunk('get_cities', async () => {
  try {
    const response = await axios.get('https://mytinerary-back-morganaalemann.onrender.com/api/cities');
    return { cities: response.data.cities };
  } catch (error) {
    console.error('Error fetching cities:', error);
    return { cities: [] }; // Retorna una lista vacía en caso de error
  }
});

export const filter_cities = createAsyncThunk('filter_cities', async (obj) => {
  try {
    const response = await axios.get(`https://mytinerary-back-morganaalemann.onrender.com/api/cities?name=${obj.name}`);
    return { cities: response.data.cities };
  } catch (error) {
    console.error('Error filtering cities:', error);
    return { cities: [] }; // Retorna una lista vacía en caso de error
  }
});
