const initialState = {
  coinData: null,
  isLoading: false,
  hasError: false,
  errorMessage: null,
};

export const FETCH_COIN_PENDING = "FETCH_COIN_PENDING";
export const FETCH_COIN_SUCCESS = "FETCH_COIN_SUCCESS";
export const FETCH_COIN_ERROR = "FETCH_COIN_ERROR";

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COIN_PENDING:
      return {
        ...state,
        coinData: null,
        isLoading: true,
        hasError: false,
      };
    case FETCH_COIN_SUCCESS:
      return {
        ...state,
        coinData: action.payload,
        isLoading: false,
        hasError: false,
      };
    case FETCH_COIN_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
        hasError: true,
      };

    default:
      return state;
  }
}

export default searchReducer;
