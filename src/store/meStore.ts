import axios from "axios";
import { Action, ActionCreator, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { IRootReducer } from "./store";

export interface IUserData {
  name?: string;
  iconImg?: string;
}

type MeState = {
  loading: boolean;
  error: string;
  data: IUserData;
}
const initialState: MeState = {
  loading: false,
  error: '',
  data: {}
}

// ME REQUEST
export const ME_REQUEST = 'ME_REQUEST';
export type MeRequestAction = {
  type: typeof ME_REQUEST
}
export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST
})

// ME_REQUEST_SUCCESS
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData
}
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  data
})

// ME_REQUEST_ERROR
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: string
}
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error
})

type MeActionType = MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction
export const meReducer: Reducer<MeState, MeActionType> = (state = initialState, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state;
  }
}

export const meRequestAsync = (): ThunkAction<void, IRootReducer, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest());
    axios.get('https://oauth.reddit.com/api/v1/me?json', {
      headers: { Authorization: `bearer ${getState().tokenReducer.tokenValue}` }
    })
      .then((resp) => {
        const userData = resp.data;
        const userDataImg = userData.icon_img.split('?')[0];
        dispatch(meRequestSuccess({ name: userData.name, iconImg: userDataImg }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(meRequestError(String(error)));
      })
}
