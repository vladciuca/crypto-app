const initialState = {
  days: "1",
  chartData: null,
  isLoading: false,
  hasError: false,
};

export const FETCH_CHART_DATA_PENDING = "FETCH_CHART_DATA_PENDING";
export const FETCH_CHART_DATA_SUCCESS = "FETCH_CHART_DATA_SUCCESS";
export const FETCH_CHART_DATA_ERROR = "FETCH_CHART_DATA_ERROR";
export const GET_CHART_PERIOD = "GET_CHART_PERIOD";

function chartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHART_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case FETCH_CHART_DATA_SUCCESS:
      return {
        ...state,
        chartData: action.payload,
        isLoading: false,
        hasError: false,
      };
    case FETCH_CHART_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case GET_CHART_PERIOD:
      console.log(action.payload);
      return {
        days: action.payload,
      };
    default:
      return state;
  }
}

export default chartReducer;
