import { TOGGLE_THEME, CHANGE_CURRENCY } from "./settingsReducer";

export const toggleTheme = () => (dispatch) => {
  dispatch({ type: TOGGLE_THEME });
};

export const changeCurrency = (e) => (dispatch) => {
  dispatch({ type: CHANGE_CURRENCY, payload: e.key });
};
