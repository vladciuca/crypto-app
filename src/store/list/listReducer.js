const initialState = {
  coinList: [],
  coinListLength: null,
  queryConfig: {
    listOrder: "Desc",
    listBy: "marketCap",
    page: 1,
    coinsPerPage: 10,
    category: "all",
    sortOrder: true,
    sortBy: "marketCapRank",
  },
  isLoading: false,
  hasError: false,
  errorMessage: null,
};

export const LIST_FETCH_COIN_LIST_PENDING = "LIST_FETCH_COIN_LIST_PENDING";
export const LIST_FETCH_COIN_LIST_SUCCESS = "LIST_FETCH_COIN_LIST_SUCCESS";
export const LIST_FETCH_COIN_LIST_ERROR = "LIST_FETCH_COIN_LIST_ERROR";
export const HANDLE_SORT = "HANDLE_SORT";
export const HANDLE_CATEGORY = "HANDLE_CATEGORY";
export const HANDLE_COINS_PER_PAGE = "HANDLE_COINS_PER_PAGE";
export const HANDLE_NEXT_PAGE = "HANDLE_NEXT_PAGE";
export const HANDLE_PREV_PAGE = "HANDLE_PREV_PAGE";
export const HANDLE_LIST_ORDER = "HANDLE_LIST_ORDER";
export const HANDLE_LIST_BY = "HANDLE_LIST_BY";
export const FLUSH_COIN_LIST = " FLUSH_COIN_LIST";

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
        coinList: action.payload,
        isLoading: false,
        hasError: false,
      };
    case LIST_FETCH_COIN_LIST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
        hasError: true,
      };
    case FLUSH_COIN_LIST:
      return {
        ...state,
        coinList: [],
      };
    //QUERY CONFIG STORE
    case HANDLE_SORT:
      return {
        ...state,
        queryConfig: action.payload,
      };
    case HANDLE_CATEGORY:
      return {
        ...state,
        queryConfig: action.payload,
      };
    case HANDLE_COINS_PER_PAGE:
      return {
        ...state,
        queryConfig: action.payload,
      };
    case HANDLE_NEXT_PAGE:
      return {
        ...state,
        queryConfig: action.payload,
      };
    case HANDLE_PREV_PAGE:
      return {
        ...state,
        queryConfig: action.payload,
      };
    case HANDLE_LIST_ORDER:
      return {
        ...state,
        queryConfig: action.payload,
      };
    case HANDLE_LIST_BY:
      return {
        ...state,
        queryConfig: action.payload,
      };

    default:
      return state;
  }
}

export default listReducer;

export const getList = (state) => state.list;
export const getQueryConfig = (state) => state.list.queryConfig;
export const isListLoading = (state) =>
  state.list.isLoading || state.favorites.isLoading;
