import { ACTION_TYPE } from './actions';
//import {updateStorage} from './storage';
import {
  AddAccountAction,
  AddTransactionAction,
  AppAction,
} from './types/actions';
import { AppState } from './types/state';

/**
 * Global Reducer.
 *
 * TODO: clean up reducer. Probably split this into sub-reducers. don't know how to do that yet.
 */
function globalReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case ACTION_TYPE.ADD_ACCOUNT:
      const { account } = action as AddAccountAction;
      return {
        ...state,
        accounts: [...state.accounts, account],
      };
    case ACTION_TYPE.ADD_TRANSACTION:
      const { transaction } = action as AddTransactionAction;
      return {
        ...state,
        transactions: [...state.transactions, transaction],
      };

    default:
      return state;
  }
}

// const ctx = new chalk.Instance({level: 2});
// TODO: re-implement
// const stateLogger = new Logger('StateLogger');

/**
 * Wrapper for logging and updating storage
 */
function StateLoggerWrapper(
  fn: (state: AppState, action: AppAction) => AppState,
) {
  return (state: AppState, action: AppAction) => {
    const returnValue = fn(state, action);
    // tslint:disable-next-line: no-console
    // stateLogger.log(action.type, returnValue);
    // console.log(ctx.black.bgYellow.bold(` ${action.type} `), returnValue);
    //updateStorage(returnValue);

    return returnValue;
  };
}
// @ts-ignore: this error is caused by BaseService. TODO: deprecate BaseService
export default StateLoggerWrapper(globalReducer);
