import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        // increment: state => state + 1,
        // decrement: (state) => { 
        //     return state - 1
        // }
    }
})



export default productsSlice.reducer;