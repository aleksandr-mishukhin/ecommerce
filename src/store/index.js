import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import productSlice from './productSlice'


const rootReducer = combineReducers({
    user: userSlice,
    product: productSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})