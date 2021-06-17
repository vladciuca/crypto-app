const initialState = {
  //   theme: true,
  //   currency: "usd",
  globalData: null,
  isLoadingGlobalData: false,
  hasErrorGlobalData: false,
  ethGasData: null,
  isLoadingEthGas: false,
  hasErrorEthGas: false,
  //   homePageLink: "",
};

export const FETCH_GLOBAL_DATA_PENDING = "FETCH_GLOBAL_DATA_PENDING";
export const FETCH_GLOBAL_DATA_SUCCESS = "FETCH_GLOBAL_DATA_SUCCESS";
export const FETCH_GLOBAL_DATA_ERROR = "FETCH_GLOBAL_DATA_ERROR";
export const FETCH_ETH_GAS_DATA_PENDING = "FETCH_ETH_GAS_DATA_PENDING";
export const FETCH_ETH_GAS_DATA_SUCCESS = "FETCH_ETH_GAS_DATA_SUCCESS";
export const FETCH_ETH_GAS_DATA_ERROR = "FETCH_ETH_GAS_DATA_ERROR";

function utilityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GLOBAL_DATA_PENDING:
      return {
        ...state,
        isLoadingGlobalData: true,
        hasErrorGlobalData: false,
      };
    case FETCH_GLOBAL_DATA_SUCCESS:
      return {
        ...state,
        globalData: action.payload,
        isLoadingGlobalData: false,
        hasErrorGlobalData: false,
      };
    case FETCH_GLOBAL_DATA_ERROR:
      return {
        ...state,
        isLoadingGlobalData: false,
        hasErrorGlobalData: true,
      };
    case FETCH_ETH_GAS_DATA_PENDING:
      return {
        ...state,
        isLoadingEthGas: true,
        hasErrorEthGas: false,
      };
    case FETCH_ETH_GAS_DATA_SUCCESS:
      return {
        ...state,
        ethGasData: action.payload,
        isLoadingEthGas: false,
        hasErrorEthGas: false,
      };
    case FETCH_ETH_GAS_DATA_ERROR:
      return {
        ...state,
        isLoadingEthGas: false,
        hasErrorEthGas: true,
      };
    default:
      return state;
  }
}

export default utilityReducer;
