import axios from "axios";
import { keysToCamel } from "utils";
import {
  LIST_FETCH_FAVORITE_LIST_PENDING,
  LIST_FETCH_FAVORITE_LIST_SUCCESS,
  LIST_FETCH_FAVORITE_LIST_ERROR,
  TOGGLE_FAVORITE_LIST,
  TOGGLE_FAVORITE_COIN,
} from "./favoritesReducer";
import { getQueryConfig, FLUSH_COIN_LIST } from "../list/listReducer";

export const toggleFavoriteCoin = (id) => (dispatch, getState) => {
  // console.log(id);
  const state = getState();
  const { favoritesList } = state.favorites;
  // console.log(favoritesList);
  if (favoritesList[id]) {
    // console.log(favoritesList[id]);
    delete favoritesList[id];
    // console.log(favoritesList, "deleting");
    dispatch({ type: TOGGLE_FAVORITE_COIN, payload: favoritesList });
  } else {
    const newFavoritesList = {
      ...favoritesList,
      [id]: id,
    };
    // console.log(newFavoritesList, "adding");
    dispatch({ type: TOGGLE_FAVORITE_COIN, payload: newFavoritesList });
  }

  // if (this.state.favoriteList[id]) {
  //   const favoriteCoins = storage("get", "favoriteList");
  //   delete favoriteCoins[id];
  //   this.setFavoriteList(favoriteCoins);
  // } else {
  //   const favoriteCoins = storage("get", "favoriteList");
  //   const newFavoriteCoins = { ...favoriteCoins, [id]: id };
  //   this.setFavoriteList(newFavoriteCoins);
  // }
};

export const toggleFavoriteList = () => (dispatch, getState) => {
  if (!getState().favorites.showFavorites) {
    dispatch({ type: FLUSH_COIN_LIST });
  }
  dispatch({ type: TOGGLE_FAVORITE_LIST });
};

export const getFavoriteList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_FETCH_FAVORITE_LIST_PENDING });
    const state = getState();
    const { listOrder, coinsPerPage } = getQueryConfig(state);

    const base = process.env.REACT_APP_ENDPOINT;
    // // add ${currency}

    // const storageFavoriteList = storage("get", "favoriteList");

    const storageFavoriteList = getState().favorites.favoritesList;
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
    // console.log(favoriteList);
    // add ${currency}
    // GET RIDDDDDDDDDDDDDDDD ${favoritePage}
    const { data } = await axios(
      `${base}/coins/markets?vs_currency=usd&ids=${favoriteList}&order=${listOrder}&per_page=${coinsPerPage}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: LIST_FETCH_FAVORITE_LIST_SUCCESS,
      payload: keysToCamel(data),
    });
  } catch (error) {
    dispatch({ type: LIST_FETCH_FAVORITE_LIST_ERROR });
  }
};
