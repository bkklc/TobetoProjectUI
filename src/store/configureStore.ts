import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";

const rootReducer = combineReducers({
    auth:authReducer
});

export const globalStore = configureStore({
    reducer:rootReducer
})