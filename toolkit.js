
import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

// add to cart
const addToCart = createAction("ADD_TO_CART")
const cartReducter = createReducer([], (builder) => {
    builder
    .addCase(addToCart, (state, action) => {
        state.push(action.payload)
    })
})

// login
const login = createAction("CREATE_SESION")
const loginReducter = createReducer({status: false}, (builder) => {
    builder
    .addCase(login, (state, action) => {
        state.status = true
    })
})

const store = configureStore({
    reducer: {
        login: loginReducter,
        cart: cartReducter
    }
})
console.log("oncreate store" , store.getState());

store.subscribe(() => {
    console.log("store change" , store.getState())
})

store.dispatch(addToCart({id: 1, qyt: 10}))
store.dispatch(login())