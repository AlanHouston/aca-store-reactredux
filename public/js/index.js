import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App"
import {createStore,combineReducers} from "redux";
import state from "./state";
import { Provider } from 'react-redux'

function shoppingCart(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':
        return [...state, action.value];
      default:
        return state
    }
  }

function products(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
    return state
  }
  let reducers =  combineReducers({
    products,shoppingCart
  })
  let store = createStore(reducers,state)


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root"));