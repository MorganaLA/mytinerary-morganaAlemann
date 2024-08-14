import { createReducer } from "@reduxjs/toolkit";
import { filter_cities, get_cities } from "../actions/cityActions";

const initialState = {
    cities: []
};

const cityReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(get_cities.fulfilled, (state, action) => {
            state.cities = action.payload; 
        })
        .addCase(filter_cities.fulfilled, (state, action) => {
            state.cities = action.payload; 
        })
);

export default cityReducer;
