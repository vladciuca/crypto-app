import { combineReducers, createStore } from "redux";
import list from "./list/listReducer";

const reducers = combineReducers({
  list,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
