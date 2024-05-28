import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/cityReducers";
import itineraryReducer from "./reducers/itineraryReducers";
import userReducer from "./reducers/userReducers";


export const store = configureStore({
    reducer:{
        userReducer: userReducer,
        cityReducer: cityReducer,
        itineraryReducer: itineraryReducer
    }
})