import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
    user: {},
    basket: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth(state, action) {
            state.isAuth = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        },
        setBasket(state, action) {
            state.basket = action.payload
        },
        addBasketProduct(state, action){
            state.basket.push(action.payload)
        }
    }
})


export const {setIsAuth, setUser, setBasket, addBasketProduct} = userSlice.actions

export default userSlice.reducer