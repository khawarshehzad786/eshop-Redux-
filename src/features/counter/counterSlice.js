import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 3 }

export const showSlice = createSlice({
    name:"showData",
    initialState,
    reducers:{
        
        showData:(state)=>{
            state.value = state.value
        }
    }

})

export const {showData} = showSlice.actions;
export default showSlice.reducer;