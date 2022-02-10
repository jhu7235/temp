import { AddAccountAction, AddTransactionAction } from './types/actions';
import { Account, Transaction } from './types/state';

export enum ACTION_TYPE {
  ADD_ACCOUNT = 'ADD_ACCOUNT',
  ADD_TRANSACTION = 'ADD_TRANSACTION',
}

export const addAccount = (account: Account): AddAccountAction => ({
  type: ACTION_TYPE.ADD_ACCOUNT,
  account,
});

export const addTransaction = (
  transaction: Transaction,
): AddTransactionAction => ({
  type: ACTION_TYPE.ADD_TRANSACTION,
  transaction,
});
