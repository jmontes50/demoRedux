import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const shoppingCartSlice = createSlice({
    name:'shoppingCart',
    initialState,
    reducers: {
        // increment: state => state + 1,
        // decrement: (state) => { 
        //     return state - 1
        // }
    }
})



export default shoppingCartSlice.reducer;