import {combineReducers, createStore} from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";


const rootReducer = combineReducers({ // creating a rootReducer to access all created reducers
    account: accountReducer,
    customer: customerReducer
})

//Redux Config
const store = createStore(rootReducer);

export default store;