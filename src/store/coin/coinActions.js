import axios from "axios";
import { keysToCamel } from "utils";
import {
  FETCH_COIN_PENDING,
  FETCH_COIN_SUCCESS,
  FETCH_COIN_ERROR,
} from "./coinReducer";

export const getCoin = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_COIN_PENDING });
    const base = process.env.REACT_APP_ENDPOINT;
    const { data } = await axios(
      `${base}/coins/${id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
    );
    dispatch({ type: FETCH_COIN_SUCCESS, payload: keysToCamel(data) });
  } catch (error) {
    dispatch({ type: FETCH_COIN_ERROR, payload: error.message });
  }
};
