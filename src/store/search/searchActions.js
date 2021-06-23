import axios from "axios";
import moment from "moment";
import {
  COINS_FETCH_ALL_PENDING,
  COINS_FETCH_ALL_SUCCESS,
  COINS_FETCH_ALL_ERROR,
} from "./searchReducer";

export const getAllCoins = () => async (dispatch, getState) => {
  const state = getState();
  const lastUpdated = moment(state.search.lastUpdated);
  const now = moment(new Date());
  const difference = now.diff(lastUpdated, "hours");

  if (difference > 24 || state.search.lastUpdated === "") {
    dispatch({ type: COINS_FETCH_ALL_PENDING });
    const base = process.env.REACT_APP_ENDPOINT;
    axios(`${base}/coins/list`)
      .then((response) => {
        dispatch({
          type: COINS_FETCH_ALL_SUCCESS,
          payload: { data: response.data, now },
        });
      })
      .catch((error) => {
        dispatch({ type: COINS_FETCH_ALL_ERROR });
      });
  }
};
