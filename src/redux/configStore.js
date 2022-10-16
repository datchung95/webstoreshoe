import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './Reducers/shopReducer'
import userReducer from './Reducers/userReducer'

export const store = configureStore({
    reducer: {
        shopReducer,
        userReducer
    },
})