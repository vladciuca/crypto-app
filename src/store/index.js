import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import list from "./list/listReducer";

const reducers = combineReducers({
  list,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        //asdada
      })
    : compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
