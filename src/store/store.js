import {configureStore} from "@reduxjs/toolkit";
import material from "./price/price";

export const store = configureStore({
    reducer: {
        price: material,
    }
});

