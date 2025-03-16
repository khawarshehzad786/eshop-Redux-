/* eslint-disable no-self-assign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 3 }

export const showSlice = createSlice({
    name:"showData",
    initialState,
    reducers:{
        
        showData:(state)=>{
            state.value = state.value
        },
        increment:(state)=>{
            state.value = state.value + 1
        },
        decrement:(state)=>{
            state.value = state.value -1
        },
        incrementbyvalu:(state,action)=>{
            state.value = state.value + action.payload
        },

    }

})

export const {showData,increment,decrement,incrementbyvalu} = showSlice.actions;
export default showSlice.reducer;