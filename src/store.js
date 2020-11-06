import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {orderReducer} from "./redux/orderReucer";

const middleware = [thunk];



const store = createStore(
    orderReducer,
    composeWithDevTools(applyMiddleware(...middleware)
    ))

export default store;
