import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        beats:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addBeat:(state,action)=>{
            
            state.quantity += 1;
            state.beats.push(action.payload.beat);
            state.total += action.payload.price;
        },
    },
});

export const { addBeat } = cartSlice.actions
export default cartSlice.reducer;