import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createInjectStore } from "redux-reducers-injector";
import thunk from "redux-thunk";

import authReducer from "../modules/auth";
import photosReducer from "../modules/photos";

const reducers = {
  global: {
    auth: authReducer,
  },
  pages: {
    photos: photosReducer,
  },
};

const middleware = composeWithDevTools(applyMiddleware(thunk));

const configureStore = () => {
  // Use this to avoid front-loading all reducers for large scale apps.
  return createInjectStore(reducers, {}, middleware);
};

const store = configureStore();

export default store;
