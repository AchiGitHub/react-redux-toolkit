import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactions: {
        loading: false,
        data: [],
        error: false
    }
}

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        createTransaction: (state, action) => {
            state.transactions.data.push(action.payload)
        },
        deleteTransaction: (state, action) => {
            state.transactions.data.splice(action.payload, 1);
        }
    }
})


export const { createTransaction, deleteTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;