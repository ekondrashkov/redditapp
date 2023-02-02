import { combineReducers } from "redux";
import { commentReducer } from "./commentStore";
import { IUserData, meReducer } from "./meStore";
import { IPostsData, postReducer } from "./postsStore";
import { tokenReducer } from "./tokenStore";

export type IRootReducer = {
  tokenReducer: {
    tokenValue: string,
  },
  commentReducer: {
    commentText: string,
  },
  meReducer: {
    loading: boolean;
    error: string;
    data: IUserData;
  },
  postReducer: {
    loading: boolean;
    error: string;
    data: Array<IPostsData>
  }
}

export const rootReducer = combineReducers<IRootReducer>({
  tokenReducer: tokenReducer,
  commentReducer: commentReducer,
  meReducer: meReducer,
  postReducer: postReducer,
})
