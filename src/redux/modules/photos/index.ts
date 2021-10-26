import {
  RETRIEVE_PHOTOS,
  RETRIEVE_PHOTOS_ERROR,
  RETRIEVE_PHOTOS_SUCCESS,
} from "./actions";

import { LOGOUT_SUCCESS } from "../auth/actions";

const createInitialState = () => {
  return {
    data: null,
    erros: null,
  };
};

export default function photosReducer(state = createInitialState(), action) {
  switch (action.type) {
    case RETRIEVE_PHOTOS:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case RETRIEVE_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        data: action.payload,
      };
    case RETRIEVE_PHOTOS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case LOGOUT_SUCCESS:
      return createInitialState();
    default:
      return state;
  }
}
