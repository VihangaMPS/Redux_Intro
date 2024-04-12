import {combineReducers, createStore} from "redux";


// =============================== Store start ===============================

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};
const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createdAt: ''
};

function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case "account/deposit":
            return {...state, balance: state.balance + action.payload};
        case "account/withdraw":
            return {...state, balance: state.balance - action.payload};
        case "account/requestLoan":
            if (state.loan > 0) return state;
            // to get a loan, loan must be 0(current moment check you already bought a loan )
            return {
                ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose,
                balance: state.balance - action.payload.amount
            };
        case "account/payLoan":
            return {...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan};

        default:
            return state;
    }
}

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt
            }
        case 'customer/updateName':
            return {...state, fullName: action.payload}

        default:
            return state;
    }
}


const rootReducer = combineReducers({ // creating a rootReducer to access all created reducers
    account: accountReducer,
    customer: customerReducer
})

//Redux Config
const store = createStore(rootReducer);

// =============================== Store end ===============================


// ====================== Action Creator Functions start ========================
/*store.dispatch({type: 'account/deposit', payload: 500});
console.log(store.getState());

store.dispatch({type: 'account/withdraw', payload: 300});
console.log(store.getState());

store.dispatch({type: 'account/requestLoan', payload: { amount: 1000, purpose: 'Buy a car'}});
console.log(store.getState());

store.dispatch({type: 'account/payLoan'});
console.log(store.getState());*/

const ACCOUNT_DEPOSIT = 'account/deposit'; // older ways
function deposit(amount) {
    return {type: ACCOUNT_DEPOSIT, payload: amount};
}

function withdraw(amount) {
    return {type: 'account/withdraw', payload: amount};
}

function requestLoan(amount, purpose) {
    return {type: 'account/requestLoan', payload: {amount: amount, purpose: purpose}};
}

function payLoan() {
    return {type: 'account/payLoan'};
}

store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, 'Buy a car'));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

// ===================================================================

function createCustomer(fullName, nationalID) {
    return {
        type: 'customer/createCustomer',
        payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString()
        }
    }
}

function updateName(fullName) {
    return {type: 'account/updateName', payload: fullName}
}

store.dispatch(createCustomer('MPS Vihanga', '972521272v'));
console.log(store.getState());


// ====================== Action Creator Functions end ========================