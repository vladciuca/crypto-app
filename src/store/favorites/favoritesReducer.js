const initialState = {
  coinList: [],
  showFavorites: false,
  favoritesList: {},
  isLoading: false,
  hasError: false,
};

export const LIST_FETCH_FAVORITE_LIST_PENDING =
  "LIST_FETCH_FAVORITE_LIST_PENDING";
export const LIST_FETCH_FAVORITE_LIST_SUCCESS =
  "LIST_FETCH_FAVORITE_LIST_SUCCESS";
export const LIST_FETCH_FAVORITE_LIST_ERROR = "LIST_FETCH_FAVORITE_LIST_ERROR";
export const TOGGLE_FAVORITE_LIST = "TOGGLE_FAVORITE_LIST";
export const TOGGLE_FAVORITE_COIN = "TOGGLE_FAVORITE_COIN";
export const HIDE_FAVORITE_LIST = "HIDE_FAVORITE_LIST";

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_FETCH_FAVORITE_LIST_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case LIST_FETCH_FAVORITE_LIST_SUCCESS:
      return {
        ...state,
        coinList: action.payload,
        isLoading: false,
        hasError: false,
      };
    case LIST_FETCH_FAVORITE_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case TOGGLE_FAVORITE_LIST:
      return {
        ...state,
        showFavorites: !state.showFavorites,
      };
    case TOGGLE_FAVORITE_COIN:
      return {
        ...state,
        favoritesList: action.payload,
      };
    case HIDE_FAVORITE_LIST:
      return {
        ...state,
        showFavorites: false,
      };
    default:
      return state;
  }
}

export default favoritesReducer;
