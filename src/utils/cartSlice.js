import { createSlice } from "@reduxjs/toolkit";
import { booksData } from "./data";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:booksData,
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        }
    }
});

export const{addItem}=cartSlice.actions;
export default cartSlice.reducer;