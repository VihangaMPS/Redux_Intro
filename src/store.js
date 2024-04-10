const initialState = {
    balance: 0,
    load: 0,
    loanPurpose: "",
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "account/deposit": return {...state, balance: state.balance + action};
        case "account/withdraw": return {...state, balance: state.balance - action};
        case "account/requestLoan":
            if (state.loan > 0) return state;

        case "account/payLoan": return {...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan}
    }
}