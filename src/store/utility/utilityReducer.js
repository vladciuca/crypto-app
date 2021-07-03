const initialState = {
  globalData: null,
  isLoadingGlobalData: false,
  hasErrorGlobalData: false,
  globalDataErrorMessage: null,
  btcMarketCap: null,
  ethMarketCap: null,
  ethGasData: null,
  isLoadingEthGas: false,
  hasErrorEthGas: false,
  ethGasErrorMessage: null,
};

export const FETCH_GLOBAL_DATA_PENDING = "FETCH_GLOBAL_DATA_PENDING";
export const FETCH_GLOBAL_DATA_SUCCESS = "FETCH_GLOBAL_DATA_SUCCESS";
export const FETCH_GLOBAL_DATA_ERROR = "FETCH_GLOBAL_DATA_ERROR";
export const FETCH_ETH_GAS_DATA_PENDING = "FETCH_ETH_GAS_DATA_PENDING";
export const FETCH_ETH_GAS_DATA_SUCCESS = "FETCH_ETH_GAS_DATA_SUCCESS";
export const FETCH_ETH_GAS_DATA_ERROR = "FETCH_ETH_GAS_DATA_ERROR";
//BTC
export const FETCH_BTC_MARKET_CAP_PENDING = "FETCH_BTC_MARKET_CAP_PENDING";
export const FETCH_BTC_MARKET_CAP_SUCCESS = "FETCH_BTC_MARKET_CAP_SUCCESS";
export const FETCH_BTC_MARKET_CAP_ERROR = "FETCH_BTC_MARKET_CAP_ERROR";
//ETH
export const FETCH_ETH_MARKET_CAP_PENDING = "FETCH_ETH_MARKET_CAP_PENDING";
export const FETCH_ETH_MARKET_CAP_SUCCESS = "FETCH_ETH_MARKET_CAP_SUCCESS";
export const FETCH_ETH_MARKET_CAP_ERROR = "FETCH_ETH_MARKET_CAP_ERROR";

function utilityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GLOBAL_DATA_PENDING:
      return {
        ...state,
        globalData: null,
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
        globalDataErrorMessage: action.payload,
        isLoadingGlobalData: false,
        hasErrorGlobalData: true,
      };
    case FETCH_ETH_GAS_DATA_PENDING:
      return {
        ...state,
        ethGasData: null,
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
        ethGasErrorMessage: action.payload,
        isLoadingEthGas: false,
        hasErrorEthGas: true,
      };
    case FETCH_BTC_MARKET_CAP_PENDING:
      return {
        ...state,
        isLoadingEthGas: true,
        hasErrorEthGas: false,
      };
    case FETCH_BTC_MARKET_CAP_SUCCESS:
      return {
        ...state,
        btcMarketCap: action.payload,
        isLoadingEthGas: false,
        hasErrorEthGas: false,
      };
    case FETCH_BTC_MARKET_CAP_ERROR:
      return {
        ...state,
        isLoadingEthGas: false,
        hasErrorEthGas: true,
      };
    case FETCH_ETH_MARKET_CAP_PENDING:
      return {
        ...state,
        isLoadingEthGas: true,
        hasErrorEthGas: false,
      };
    case FETCH_ETH_MARKET_CAP_SUCCESS:
      return {
        ...state,
        ethMarketCap: action.payload,
        isLoadingEthGas: false,
        hasErrorEthGas: false,
      };
    case FETCH_ETH_MARKET_CAP_ERROR:
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
