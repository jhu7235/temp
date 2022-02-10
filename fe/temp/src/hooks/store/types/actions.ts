import { ACTION_TYPE } from '../actions';
import { Account, Transaction } from './state';

export type AddAccountAction = {
  type: ACTION_TYPE.ADD_ACCOUNT;
  account: Account;
};

export type AddTransactionAction = {
  type: ACTION_TYPE.ADD_TRANSACTION;
  transaction: Transaction;
};

export type AppAction = AddAccountAction | AddTransactionAction;

export const STORAGE_KEY = 'OverlapStorage';
