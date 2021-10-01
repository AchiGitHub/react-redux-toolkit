import { createAction } from "@reduxjs/toolkit";
import { CREATE_TRANSACTION, DELETE_TRANSACTION } from "../types/TransactionTypes";

export const createTransaction = createAction(CREATE_TRANSACTION);
export const deleteTransaction = createAction(DELETE_TRANSACTION);