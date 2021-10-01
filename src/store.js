import { configureStore } from '@reduxjs/toolkit';
import transactionSlice from './redux/reducers/Transactions';


export const store = configureStore({
    reducer: {
        transactions: transactionSlice
    }
})