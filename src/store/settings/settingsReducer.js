const initialState = {
  theme: true,
  currency: "usd",
};

export const TOGGLE_THEME = "TOGGLE_THEME";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
}

export default settingsReducer;
