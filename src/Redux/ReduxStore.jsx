import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/ReduxSlice";


export default configureStore({
    reducer:{
        cart:cartReducer
    }
})