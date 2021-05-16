const initialState = {
  coinList: [],
  coinListLength: null,
  showFavorites: false,
  favoritePage: 1,
  queryConfig: {
    listOrder: "marketCapDesc",
    page: 1,
    coinsPerPage: 10,
    category: "all",
    sortOrder: true,
    sortBy: "marketCapRank",
  },
  isLoading: false,
  hasError: false,
};

export const LIST_FETCH_COIN_LIST_PENDING = "LIST_FETCH_COIN_LIST_PENDING";
export const LIST_FETCH_COIN_LIST_SUCCESS = "LIST_FETCH_COIN_LIST_SUCCESS";
export const LIST_FETCH_COIN_LIST_ERROR = "LIST_FETCH_COIN_LIST_ERROR";
export const SORT_COIN_LIST = "SORT_COIN_LIST";
export const HANDLE_SORT = "HANDLE_SORT";

function listReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_FETCH_COIN_LIST_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case LIST_FETCH_COIN_LIST_SUCCESS:
      return {
        ...state,
        coinList: [...state.coinList, ...action.payload],
        isLoading: false,
        hasError: false,
      };
    case LIST_FETCH_COIN_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}

export default listReducer;

export const getList = (state) => state.list;
export const getQueryConfig = (state) => state.list.queryConfig;
