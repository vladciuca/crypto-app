const initialState = {
  coinList: [],
  coinListLength: null,
  showFavorites: false,
  favoritePage: 1,
  queryConfig: {
    listOrder: "marketCapDesc",
    page: null,
    coinsPerPage: 50,
    category: "all",
    sortOrder: true,
    sortBy: "marketCapRank",
  },
  isLoading: false,
  hasError: false,
};

function listReducer(state = initialState, action) {
  return state;
}

export default listReducer;
