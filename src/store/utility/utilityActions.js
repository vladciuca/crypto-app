import axios from "axios";
import { keysToCamel } from "utils";
import {
  FETCH_GLOBAL_DATA_PENDING,
  FETCH_GLOBAL_DATA_SUCCESS,
  FETCH_GLOBAL_DATA_ERROR,
  FETCH_ETH_GAS_DATA_PENDING,
  FETCH_ETH_GAS_DATA_SUCCESS,
  FETCH_ETH_GAS_DATA_ERROR,
  FETCH_BTC_MARKET_CAP_PENDING,
  FETCH_BTC_MARKET_CAP_SUCCESS,
  FETCH_BTC_MARKET_CAP_ERROR,
  FETCH_ETH_MARKET_CAP_PENDING,
  FETCH_ETH_MARKET_CAP_SUCCESS,
  FETCH_ETH_MARKET_CAP_ERROR,
} from "./utilityReducer";

export const getGlobalData = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_GLOBAL_DATA_PENDING });
    const base = process.env.REACT_APP_ENDPOINT;
    const { data } = await axios(`${base}/global`);
    dispatch({
      type: FETCH_GLOBAL_DATA_SUCCESS,
      payload: keysToCamel(data.data),
    });
  } catch (error) {
    dispatch({ type: FETCH_GLOBAL_DATA_ERROR, payload: error.message });
  }
};

export const getEthGasData = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ETH_GAS_DATA_PENDING });
    const apiKey = process.env.REACT_APP_GASPRICE_API_KEY;
    const { data } = await axios(
      `https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=${apiKey}`
    );
    dispatch({
      type: FETCH_ETH_GAS_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: FETCH_ETH_GAS_DATA_ERROR, payload: error.message });
  }
};

export const getBtcMarketCap = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_BTC_MARKET_CAP_PENDING });
    const id = "bitcoin";
    const base = process.env.REACT_APP_ENDPOINT;
    const { data } = await axios(`${base}/coins/${id}`);
    dispatch({
      type: FETCH_BTC_MARKET_CAP_SUCCESS,
      payload: data.market_data.market_cap,
    });
  } catch (error) {
    dispatch({ type: FETCH_BTC_MARKET_CAP_ERROR });
  }
};

export const getEthMarketCap = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ETH_MARKET_CAP_PENDING });
    const id = "ethereum";
    const base = process.env.REACT_APP_ENDPOINT;
    const { data } = await axios(`${base}/coins/${id}`);
    dispatch({
      type: FETCH_ETH_MARKET_CAP_SUCCESS,
      payload: data.market_data.market_cap,
    });
  } catch (error) {
    dispatch({ type: FETCH_ETH_MARKET_CAP_ERROR });
  }
};
