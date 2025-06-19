import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slides/userSlide'
import orderReducer from './slides/OrderSlide'

export const store = configureStore({
    reducer: {

        user: userReducer,
        order: orderReducer

    },
})