import axios from "axios";
import {
  COINS_FETCH_ALL_PENDING,
  COINS_FETCH_ALL_SUCCESS,
  COINS_FETCH_ALL_ERROR,
} from "./searchReducer";

export const getAllCoins = (inputValue) => async (dispatch) => {
  const endpoint = "https://crypto-app-server.herokuapp.com/coins";
  if (!inputValue) return;
  try {
    dispatch({ type: COINS_FETCH_ALL_PENDING });

    const data = await axios(`${endpoint}/${inputValue}`);
    dispatch({
      type: COINS_FETCH_ALL_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: COINS_FETCH_ALL_ERROR });
  }
};
