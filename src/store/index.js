import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import {
  createReduxLocationActions,
  listenForHistoryChange,
} from "redux-location-state";
import { merge } from "lodash";
import createBrowserHistory from "history/createBrowserHistory";
import storage from "redux-persist/lib/storage";
import list from "./list/listReducer";
import favorites from "./favorites/favoritesReducer";

const history = createBrowserHistory();

const paramSetup = {
  "/": {
    by: {
      stateKey: "list.queryConfig.listBy",
      options: { shouldPush: true },
    },
    order: {
      stateKey: "list.queryConfig.listOrder",
      options: { shouldPush: true },
    },
  },
};

function mapLocationToState(state, location) {
  switch (location.pathname) {
    case "/":
      return merge({}, state, location.query);

    default:
      return state;
  }
}

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoritesList"],
};

const reducers = combineReducers({
  list,
  favorites,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const { locationMiddleware, reducersWithLocation } = createReduxLocationActions(
  paramSetup,
  mapLocationToState,
  history,
  persistedReducer
);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = composeEnhancers(
  applyMiddleware(thunk, locationMiddleware)
)(createStore)(reducersWithLocation);

//const store = compose(applyMiddleware([locationMiddleware]))(createStore)(reducersWithLocation);

export const persistor = persistStore(store);
listenForHistoryChange(store, history);
