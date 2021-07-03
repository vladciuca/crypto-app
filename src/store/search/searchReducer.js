const initialState = {
  allCoins: null,
  isLoading: false,
  hasError: false,
};

export const COINS_FETCH_ALL_PENDING = "COINS_FETCH_ALL_PENDING";
export const COINS_FETCH_ALL_SUCCESS = "COINS_FETCH_ALL_SUCCESS";
export const COINS_FETCH_ALL_ERROR = "COINS_FETCH_ALL_ERROR";

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case COINS_FETCH_ALL_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case COINS_FETCH_ALL_SUCCESS:
      return {
        ...state,
        allCoins: action.payload,
        isLoading: false,
        hasError: false,
      };
    case COINS_FETCH_ALL_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };

    default:
      return state;
  }
}

export default searchReducer;
