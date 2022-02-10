import React, {
  createContext,
  Dispatch,
  ReactChildren,
  useContext,
  useReducer,
} from 'react';
import { initialState } from './initialState';
import globalReducer from './reducer';
import { AppAction } from './types/actions';
import { AppState } from './types/state';

interface ContextProps {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}

const GlobalContext = createContext({} as ContextProps);

interface ProviderProps {
  children: ReactChildren | JSX.Element;
}

function GlobalProvider(props: ProviderProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return <GlobalContext.Provider value={{ state, dispatch }} {...props} />;
}

function useGlobalState() {
  return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalState };
