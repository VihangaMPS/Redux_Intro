import {applyMiddleware, combineReducers, createStore} from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import {thunk} from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";


/*const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})


//Redux Config
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__((applyMiddleware(thunk))));*/

//Using Modern Redux Toolkit
const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    }
});

export default store; 

