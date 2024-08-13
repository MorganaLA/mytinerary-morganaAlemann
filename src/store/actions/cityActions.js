import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'https://mytinerary-back-morganaalemann.onrender.com';

// Petición para obtener todas las ciudades
export const get_cities = createAsyncThunk('get_cities', async () => {
    try {
        const response = await axios.get(`${baseURL}/api/cities`);
        // Retorna los datos de las ciudades
        return response.data.cities;
    } catch (error) {
        // Maneja el error y lanza una excepción para que Redux pueda manejarlo
        console.error('Error fetching cities:', error);
        throw error;
    }
});

// Petición para filtrar ciudades por nombre y/o país
export const filter_cities = createAsyncThunk('filter_cities', async (filters) => {
    try {
        // Construye la URL de la petición con los filtros aplicados
        const { name, country } = filters;
        const query = new URLSearchParams();
        if (name) query.append('name', name);
        if (country) query.append('country', country);
        
        const response = await axios.get(`${baseURL}/api/cities?${query.toString()}`);
        // Retorna los datos de las ciudades filtradas
        return response.data.cities;
    } catch (error) {
        // Maneja el error y lanza una excepción para que Redux pueda manejarlo
        console.error('Error fetching filtered cities:', error);
        return [];  // Retorna un array vacío en caso de error
    }
});

