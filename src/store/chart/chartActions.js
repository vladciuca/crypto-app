import axios from "axios";
import { keysToCamel } from "utils";
import {
  FETCH_CHART_DATA_PENDING,
  FETCH_CHART_DATA_SUCCESS,
  FETCH_CHART_DATA_ERROR,
  GET_CHART_PERIOD,
} from "./chartReducer";

export const getChartDays = (e) => async (dispatch) => {
  dispatch({ type: GET_CHART_PERIOD, payload: e.target.value });
};

export const getChartData = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_CHART_DATA_PENDING });
    const state = getState();
    const days = state.chart.days;
    const currency = state.settings.currency;
    const base = process.env.REACT_APP_ENDPOINT;
    const { data } = await axios(
      `${base}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
    );
    dispatch({ type: FETCH_CHART_DATA_SUCCESS, payload: keysToCamel(data) });
  } catch (error) {
    dispatch({ type: FETCH_CHART_DATA_ERROR, payload: error.message });
  }
};
