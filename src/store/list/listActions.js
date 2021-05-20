import axios from "axios";
import { camelToSnake, keysToCamel } from "utils";
import {
  LIST_FETCH_COIN_LIST_PENDING,
  LIST_FETCH_COIN_LIST_SUCCESS,
  LIST_FETCH_COIN_LIST_ERROR,
  HANDLE_SORT,
  HANDLE_CATEGORY,
  HANDLE_COINS_PER_PAGE,
  HANDLE_NEXT_PAGE,
  HANDLE_PREV_PAGE,
  HANDLE_LIST_ORDER,
  HANDLE_LIST_BY,
  getQueryConfig,
} from "./listReducer";

export const handleSort = (sortBy) => (dispatch, getState) => {
  const state = getState();
  const newSortBy = {
    ...state.list.queryConfig,
    sortBy: sortBy ? sortBy : state.list.queryConfig.sortBy,
    sortOrder: !state.list.queryConfig.sortOrder,
  };
  dispatch({ type: HANDLE_SORT, payload: newSortBy });
};

export const handleCategory = (category) => (dispatch, getState) => {
  const state = getState();
  if (category.key === "all") {
    const newCategory = {
      ...state.list.queryConfig,
      category: category ? category.key : state.list.queryConfig.category,
      page: 1,
    };
    dispatch({ type: HANDLE_CATEGORY, payload: newCategory });
  } else {
    const newCategory = {
      ...state.list.queryConfig,
      category: category ? category.key : state.list.queryConfig.category,
      page: 1,
      coinsPerPage: 50,
    };
    dispatch({ type: HANDLE_CATEGORY, payload: newCategory });
  }
  // const newCategory = {
  //   ...state.list.queryConfig,
  //   category: category ? category.key : state.list.queryConfig.category,
  //   page: 1,
  // };
  // dispatch({ type: HANDLE_CATEGORY, payload: newCategory });
};

export const handleCoinsPerPage = (coinsPerPage) => (dispatch, getState) => {
  const state = getState();
  const newCoinsPerPage = {
    ...state.list.queryConfig,
    coinsPerPage: coinsPerPage
      ? coinsPerPage.key
      : state.list.queryConfig.coinsPerPage,
  };
  dispatch({ type: HANDLE_COINS_PER_PAGE, payload: newCoinsPerPage });
};

export const handleNextPage = (page) => (dispatch, getState) => {
  const state = getState();
  if (state.list.isLoading) return;
  const newPage = {
    ...state.list.queryConfig,
    page: page ? state.list.queryConfig.page + 1 : state.list.queryConfig.page,
  };
  dispatch({ type: HANDLE_NEXT_PAGE, payload: newPage });
};

export const handlePrevPage = (page) => (dispatch, getState) => {
  const state = getState();
  if (state.list.queryConfig.page === 1) return;
  const newPage = {
    ...state.list.queryConfig,
    page: page ? state.list.queryConfig.page - 1 : state.list.queryConfig.page,
  };
  dispatch({ type: HANDLE_PREV_PAGE, payload: newPage });
};

export const handleListOrder = (listOrder) => (dispatch, getState) => {
  const state = getState();
  const newListOrder = {
    ...state.list.queryConfig,
    listOrder: listOrder ? listOrder : state.list.queryConfig.listOrder,
  };
  dispatch({ type: HANDLE_LIST_ORDER, payload: newListOrder });
};

export const handleListBy = (listBy) => (dispatch, getState) => {
  const state = getState();
  const newListBy = {
    ...state.list.queryConfig,
    listBy: listBy ? listBy.key : state.list.queryConfig.listBy,
  };
  dispatch({ type: HANDLE_LIST_BY, payload: newListBy });
};

export const getCoinList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_FETCH_COIN_LIST_PENDING });
    const state = getState();
    const { listOrder, listBy, page, coinsPerPage, category } =
      getQueryConfig(state);
    const list = camelToSnake(listBy + listOrder);
    let categoryQuery;
    if (category === "all") {
      categoryQuery = "";
    } else {
      categoryQuery = `&category=${camelToSnake(category)}`;
    }
    const base = process.env.REACT_APP_ENDPOINT;
    // add ${currency}
    const { data } = await axios(
      `${base}/coins/markets?vs_currency=usd${categoryQuery}&order=${list}&per_page=${coinsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: LIST_FETCH_COIN_LIST_SUCCESS,
      payload: keysToCamel(data),
    });
  } catch (error) {
    dispatch({ type: LIST_FETCH_COIN_LIST_ERROR });
  }
};

//TO CONVERT!--- OLD API CALL WITH TURNERY
// getCoinList = async () => {
//     this.setState({ isLoading: true });
//     try {
//       const { currency } = this.props;
//       const { favoritePage } = this.state;
//       const { page, coinsPerPage } = this.state.queryConfig;
//       const category = camelToSnake(this.state.queryConfig.category);
//       let categoryQuery;
//       if (category === "all") {
//         categoryQuery = "";
//       } else {
//         categoryQuery = `&category=${category}`;
//       }
//       const listOrder = camelToSnake(this.state.queryConfig.listOrder);
//       const base = process.env.REACT_APP_ENDPOINT;
//       this.loadingBar.current.continuousStart();
//       if (!this.state.showFavorites) {
//         const { data } = await axios(
//           `${base}/coins/markets?vs_currency=${currency}${categoryQuery}&order=${listOrder}&per_page=${coinsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
//         );
//         this.setState({
//           coinList: keysToCamel(data),
//           coinListLength: data.length,
//           isLoading: false,
//           hasError: false,
//         });
//       } else {
//         const storageFavoriteList = storage("get", "favoriteList");
//         if (!storageFavoriteList) {
//           return;
//         }
//         if (Object.values(storageFavoriteList).length === 0) return;
//         //put it in utils
//         const favoriteList = Object.values(storageFavoriteList).reduce(
//           (acc, current, index, array) => {
//             if (index === array.length - 1) {
//               return acc + `${current}`;
//             }
//             return acc + `${current}%2C%20`;
//           },
//           ""
//         );
//         const { data } = await axios(
//           `${base}/coins/markets?vs_currency=${currency}&ids=${favoriteList}&order=${listOrder}&per_page=${coinsPerPage}&page=${favoritePage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
//         );
//         this.setState({
//           coinList: keysToCamel(data),
//           coinListLength: data.length,
//           isLoading: false,
//           hasError: false,
//         });
//       }
//       this.loadingBar.current.complete();
//     } catch (error) {
//       this.setState({ isLoading: false, hasError: true });
//     }
//   };
