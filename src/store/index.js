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
import utility from "./utility/utilityReducer";
import settings from "./settings/settingsReducer";

const history = createBrowserHistory();

const paramSetup = {
  "/": {
    category: {
      stateKey: "list.queryConfig.category",
      options: { shouldPush: true },
    },
    page: {
      stateKey: "list.queryConfig.page",
      options: { shouldPush: true },
      type: "number",
    },
    perPage: {
      stateKey: "list.queryConfig.coinsPerPage",
      options: { shouldPush: true },
      type: "number",
    },
    by: {
      stateKey: "list.queryConfig.listBy",
      options: { shouldPush: true },
    },
    order: {
      stateKey: "list.queryConfig.listOrder",
      options: { shouldPush: true },
    },
    sortBy: {
      stateKey: "list.queryConfig.sortBy",
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

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoritesList"],
};

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["settings"],
};

const reducers = combineReducers({
  list,
  favorites: persistReducer(favoritesPersistConfig, favorites),
  utility,
  settings,
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

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

export const persistor = persistStore(store);
listenForHistoryChange(store, history);
