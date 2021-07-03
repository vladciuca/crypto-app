import axios from "axios";
import { keysToCamel } from "utils";
import {
  LIST_FETCH_FAVORITE_LIST_PENDING,
  LIST_FETCH_FAVORITE_LIST_SUCCESS,
  LIST_FETCH_FAVORITE_LIST_ERROR,
  TOGGLE_FAVORITE_LIST,
  TOGGLE_FAVORITE_COIN,
  HIDE_FAVORITE_LIST,
} from "./favoritesReducer";
import { getQueryConfig, FLUSH_COIN_LIST } from "../list/listReducer";

export const toggleFavoriteCoin = (id) => (dispatch, getState) => {
  const state = getState();
  const { favoritesList } = state.favorites;
  if (favoritesList[id]) {
    delete favoritesList[id];
    const newFavoritesList = {
      ...favoritesList,
    };
    dispatch({ type: TOGGLE_FAVORITE_COIN, payload: newFavoritesList });
  } else {
    const newFavoritesList = {
      ...favoritesList,
      [id]: id,
    };
    dispatch({ type: TOGGLE_FAVORITE_COIN, payload: newFavoritesList });
  }
};

export const toggleFavoriteList = () => (dispatch, getState) => {
  if (!getState().favorites.showFavorites) {
    dispatch({ type: FLUSH_COIN_LIST });
  }
  dispatch({ type: TOGGLE_FAVORITE_LIST });
};

export const hideFavoriteList = () => (dispatch) => {
  dispatch({ type: HIDE_FAVORITE_LIST });
};

export const getFavoriteList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_FETCH_FAVORITE_LIST_PENDING });
    const state = getState();
    const { listOrder, coinsPerPage } = getQueryConfig(state);

    const base = process.env.REACT_APP_ENDPOINT;
    const currency = state.settings.currency;

    const storageFavoriteList = state.favorites.favoritesList;
    if (!Object.values(storageFavoriteList).length) {
      dispatch({ type: LIST_FETCH_FAVORITE_LIST_SUCCESS, payload: [] });
      return;
    }

    //put it in utils
    const favoriteList = Object.values(storageFavoriteList).reduce(
      (acc, current, index, array) => {
        if (index === array.length - 1) {
          return acc + `${current}`;
        }
        return acc + `${current}%2C%20`;
      },
      ""
    );
    const { data } = await axios(
      `${base}/coins/markets?vs_currency=${currency}&ids=${favoriteList}&order=${listOrder}&per_page=${coinsPerPage}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: LIST_FETCH_FAVORITE_LIST_SUCCESS,
      payload: keysToCamel(data),
    });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: LIST_FETCH_FAVORITE_LIST_ERROR, payload: error.message });
  }
};
