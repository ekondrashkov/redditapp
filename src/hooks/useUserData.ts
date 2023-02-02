import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUserData, meRequestAsync } from "../store/meStore";
import { IRootReducer } from "../store/store";
import { setToken, saveToken } from "../store/tokenStore";

export function useUserData() {
  const data = useSelector<IRootReducer, IUserData>(state => state.meReducer.data);
  const loading = useSelector<IRootReducer, boolean>(state => state.meReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.__token__) {
      // @ts-ignore
      dispatch(saveToken())
    }
  }, []);
  const token = useSelector<IRootReducer, string>(state => state.tokenReducer.tokenValue);

  useEffect(() => {
    if (token && token !== 'undefined') {
      // @ts-ignore
      dispatch(meRequestAsync());
    }
  }, [token])

  return {
    data,
    loading
  };
}
