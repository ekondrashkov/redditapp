import { Action, ActionCreator, AnyAction, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { IRootReducer } from "./store";

export type TokenState = {
  tokenValue: string;
}

const initialState: TokenState = {
  tokenValue: '',
}

const SET_TOKEN = 'SET_TOKEN';
export const setToken: ActionCreator<AnyAction> = (tokenValue) => ({
  type: SET_TOKEN,
  tokenValue,
})

export const tokenReducer: Reducer<TokenState> = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        tokenValue: action.tokenValue
      }
    default:
      return state;
  }
}

export const saveToken = (): ThunkAction<void, IRootReducer, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(setToken(window.__token__));
}
