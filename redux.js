
// reducer

import { legacy_createStore  } from "redux";




const cartReducter = (
  state = {
    cart: [{id:1,qyt:19}],
  },
  action
) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state;
    }
};

// store
const store = legacy_createStore(cartReducter);
console.log("oncreate store" , store.getState());

// subscribe
store.subscribe(() => {
    console.log("onchange store" , store.getState());
});

// dispatch
const action1 = {type:"ADD_TO_CART", payload:{id:2,qyt:20}}
store.dispatch(action1)