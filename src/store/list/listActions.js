import axios from "axios";
import { camelToSnake, keysToCamel } from "utils";
import {
  LIST_FETCH_COIN_LIST_PENDING,
  LIST_FETCH_COIN_LIST_SUCCESS,
  LIST_FETCH_COIN_LIST_ERROR,
  SORT_COIN_LIST,
  HANDLE_SORT,
  getQueryConfig,
} from "./listReducer";

export const getCoinList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_FETCH_COIN_LIST_PENDING });
    const { listOrder, page, coinsPerPage, category } = getQueryConfig(
      getState()
    );

    let categoryQuery;
    if (category === "all") {
      categoryQuery = "";
    } else {
      categoryQuery = `&category=${camelToSnake(category)}`;
    }

    const base = process.env.REACT_APP_ENDPOINT;

    // add ${currency}
    const { data } = await axios(
      `${base}/coins/markets?vs_currency=usd${categoryQuery}&order=${listOrder}&per_page=${coinsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: LIST_FETCH_COIN_LIST_SUCCESS,
      payload: keysToCamel(data),
    });
  } catch (error) {
    dispatch({ type: LIST_FETCH_COIN_LIST_ERROR });
  }
};

export const sortCoinList = (sortBy) => {
  // console.log(sortBy);
  return {
    type: SORT_COIN_LIST,
    payload: sortBy,
  };
};

export const handleSort = (sortBy) => {
  // console.log(sortBy);
  return {
    type: HANDLE_SORT,
    payload: sortBy,
  };
};

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
