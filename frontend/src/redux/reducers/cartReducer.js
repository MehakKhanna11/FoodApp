import { createSlice } from "@reduxjs/toolkit";


export const cartReducer=createSlice({name:"cart",initialState:{
    cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):{
        cheeseVadapav:{
            quantity:0,
            price:100,
        },
        vegVadapav:{
            quantity:0,
            price:80
        },
        specialVadapav:{
            quantity:0,
            price:120
        },
    },
    subTotal:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).subTotal:0,
    tax:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).tax:0,
    shippingCharges:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).shippingCharges:0,
    total:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).total:0,
    shippingInfo:localStorage.getItem("shippingInfo")?JSON.parse(localStorage.getItem("shippingInfo")):{},

},
    reducers:{
        cheeseVPIncrement:(state)=>{
            state.cartItems.cheeseVadapav.quantity+=1;
        },
        vegVPIncrement:(state)=>{
            state.cartItems.vegVadapav.quantity+=1;
        },       
        specialVPIncrement:(state)=>{
            state.cartItems.specialVadapav.quantity+=1;
        },   
        cheeseVPDecrement:(state)=>{
            state.cartItems.cheeseVadapav.quantity-=1;
        },
        vegVPDecrement:(state)=>{
            state.cartItems.vegVadapav.quantity-=1;
        },       
        specialVPDecrement:(state)=>{
            state.cartItems.specialVadapav.quantity-=1;
        }, 
        calculatePrice:(state)=>{
            state.subTotal=state.cartItems.cheeseVadapav.price*state.cartItems.cheeseVadapav.quantity+
            state.cartItems.vegVadapav.price*state.cartItems.vegVadapav.quantity+
            state.cartItems.specialVadapav.price*state.cartItems.specialVadapav.quantity;
            state.tax=state.subTotal*0.22;
            state.shippingCharges=state.subTotal>1000?60:100;
            state.total=state.shippingCharges+state.tax+state.subTotal;
        }  ,
        emptyState:(state)=>{
            state.cartItems={
                    cheeseVadapav:{
                        quantity:0,
                        price:100,
                    },
                    vegVadapav:{
                        quantity:0,
                        price:80
                    },
                    specialVadapav:{
                        quantity:0,
                        price:120
                    },
                };
                state.subTotal=0;
                state.shippingCharges=0;
                state.tax=0;
                state.total=0;  
        },
        addShippingInfo:(state,action)=>{
            state.shippingInfo={
                hNo:action.payload.hNo,
                city:action.payload.city,
                state:action.payload.state,
                country:action.payload.country,
                pincode:action.payload.pincode,
                phoneNo:action.payload.phoneNo,
            }
        },

    }
})


export const {vegVPIncrement,vegVPDecrement,cheeseVPIncrement,cheeseVPDecrement,specialVPDecrement,specialVPIncrement,calculatePrice,addShippingInfo,emptyState}=cartReducer.actions;
export default cartReducer.reducer;