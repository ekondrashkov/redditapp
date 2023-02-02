import { ActionCreator, AnyAction, Reducer } from "redux";

export interface IPostsData {
  author: string;
  title: string;
  ups: number;
  url: string;
  thumbnail: string;
  created: number;
  id: string;
  iconImg: string;
  comments: number;
  subreddit: string;
}

type PostState = {
  loading: boolean;
  error: string;
  data: Array<IPostsData>
}

const initialState: PostState = {
  loading: false,
  error: '',
  data: []
}

// POST_REQUEST
export const POST_REQUEST = 'POST_REQUEST';
export const postRequest: ActionCreator<AnyAction> = () => ({
  type: POST_REQUEST
})

// POST_REQUEST_SUCCESS
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const postRequestSuccess: ActionCreator<AnyAction> = (data: Array<IPostsData>) => ({
  type: POST_REQUEST_SUCCESS,
  data
})

// POST_REQUEST_ERROR
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const postRequestError: ActionCreator<AnyAction> = (error: string) => ({
  type: POST_REQUEST_ERROR,
  error
})

export const postReducer: Reducer<PostState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.data],
        loading: false
      }
    case POST_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state;
  }
}
