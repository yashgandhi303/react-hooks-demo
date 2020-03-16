import React from 'react';
import { appReducer, Action, initialState, IState } from '../hooks/appReducer';
import * as actions from '../actions/actionTypes';

type Dispatch = (action: Action) => void;

interface IAppContext {
  state: IState;
  formSubmit: (item: any) => void;
  nextStep: (form: any, step: number) => void;
  currentStep: (step: number) => void;
}

const AppStateContext = React.createContext<IAppContext | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState);

  const formSubmit = async (formData: any) => {
    try {
      dispatch({ type: actions.SUBMIT_FORM, payload: { form: formData } });
      return true;
    } catch (error) {
      dispatch({ type: actions.ERROR, payload: error });
      return false;
    }
  }

  const nextStep = async (form: any, step: number) => {
    try {
      currentStep(step);
      dispatch({ type: actions.NEXT_STEP, payload: { form, step } });
    } catch (error) {
      dispatch({ type: actions.ERROR, payload: error });
      return false;
    }
  }

  const currentStep = async (step: number) => {
    try {
      dispatch({ type: actions.CURRENT_STEP, payload: { step } });
    } catch (error) {
      dispatch({ type: actions.ERROR, payload: error });
      return false;
    }
  }

  const appState = {
    state,
    nextStep,
    formSubmit,
    currentStep
  };

  return (
    <AppStateContext.Provider value={appState}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppContextProvider');
  }
  return context;
}

const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within an AppContextProvider');
  }
  return context;
}

export { AppContextProvider, AppStateContext, useAppState, useAppDispatch };
