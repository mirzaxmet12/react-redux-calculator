import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./CalculatorSlice";

export default configureStore({
    reducer: {
        number: calcSlice,
    }
})