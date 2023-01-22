import { legacy_createStore,applyMiddleware,compose,combineReducers } from "redux";
import thunk from "redux-thunk"

import { Cartreducer as Cart } from "./reducer"
import { reducer as Product } from "../productcomponents/Redux/reducer";

const rootReducer = combineReducers({Cart,Product})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store=legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)
// console.log(store.getState)
export {store}