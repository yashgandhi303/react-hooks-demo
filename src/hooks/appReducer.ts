import { useReducer, Reducer } from 'react';
import * as actions from '../actions/actionTypes';
import { saveUserOnBoardingData } from '../services/api';
import { v4 as uuidv4 } from 'uuid';
export interface IState {
  loading: boolean;
  error: Error | null;
  step: number,
  formData: {}
}

// TODO - fix the anys
export type Action =
  | { type: 'ERROR'; payload: any }
  | { type: 'NEXT_STEP'; payload: any }
  | { type: 'CURRENT_STEP'; payload: any }
  | { type: 'SUBMIT_FORM'; payload: any };

export let initialState: IState = {
  loading: true,
  error: null,
  step: 1,
  formData: {}
};

export const appReducer: Reducer<IState, Action> = (state: IState, action: Action): IState => {
  switch (action.type) {
    case actions.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actions.CURRENT_STEP:
      return {
        ...state,
        step: action.payload.step,
        formData: { ...state.formData, ...action.payload.form }
      }
    case actions.NEXT_STEP:
      return {
        ...state,
        step: action.payload.step,
        formData: { ...state.formData, ...action.payload.form }
      }
    case actions.SUBMIT_FORM:
      const data = { ...state.formData, ...action.payload.form };
      saveUserOnBoardingData(uuidv4(), data);
      return {
        ...state,
        step: 1,
        formData: data
      }
    default:
      return state;
  }
};

export default () => useReducer(appReducer, initialState);
