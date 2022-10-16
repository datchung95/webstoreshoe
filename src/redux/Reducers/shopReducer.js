import { createSlice } from '@reduxjs/toolkit'
import { CART, TOTAL } from '../../utils/settings/config';

let arrCart = [];

let total = 0;

if (localStorage.getItem(CART)) {
    arrCart = JSON.parse(localStorage.getItem(CART))
}

if (localStorage.getItem(TOTAL)) {
    total = JSON.parse(localStorage.getItem(TOTAL))
}

const initialState = {
    allStore: [],
    allProduct: [],
    productByCategory: [],
    productById: {},
    totalProduct: total,
    cart: arrCart
}

const shopReducer = createSlice({
    name: "shopReducer",
    initialState,
    reducers: {
        getAllStoreReducer: (state, action) => {
            state.allStore = action.payload
        },
        getAllProductReducer: (state, action) => {
            state.allProduct = action.payload
        },
        getProductByCategoryReducer: (state, action) => {
            state.productByCategory = action.payload
        },
        getProductByIdReducer: (state, action) => {
            state.productById = action.payload
        },
        addToCartReducer: (state, action) => {
            let index = state.cart.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.cart[index].quantityShoe += 1
                state.totalProduct += 1
            } else {
                state.cart.push(action.payload)
                state.totalProduct += 1
            }
            localStorage.setItem(CART, JSON.stringify(state.cart));
            localStorage.setItem(TOTAL, state.totalProduct)
        },
        upDownCartReducer: (state, action) => {
            let index = state.cart.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                if (action.payload.upDown) {
                    state.cart[index].quantityShoe += 1
                    state.totalProduct += 1
                } else {
                    if (state.cart[index].quantityShoe > 1) {
                        state.cart[index].quantityShoe -= 1
                        state.totalProduct -= 1
                    }
                }
            }
            localStorage.setItem(CART, JSON.stringify(state.cart));
            localStorage.setItem(TOTAL, state.totalProduct)
        },
        deleteCartReducer: (state, action) => {
            let index = state.cart.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.cart.splice(index, 1)
                state.totalProduct = state.totalProduct - action.payload.quantity
            }
            localStorage.setItem(CART, JSON.stringify(state.cart));
            localStorage.setItem(TOTAL, state.totalProduct)
        }
    }
});

export const {
    getAllStoreReducer,
    getAllProductReducer,
    getProductByCategoryReducer,
    getProductByIdReducer,
    addToCartReducer,
    upDownCartReducer,
    deleteCartReducer
} = shopReducer.actions

export default shopReducer.reducer