import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    //actions
    reducers:{
        //action -->payload
        //type cart/addToCart
        addToCart:(state,action)=>{
            console.log("action",action)
            state.items.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            //filter....
        }
    }

})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer