import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actions";
import { getAuthUser } from "../../../utils/auth";

const createInitialState = () => {
  return {
    jwt: getAuthUser(),
  };
};

export default function authReducer(state = createInitialState(), action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        jwt: action.payload.jwt,
      };
    case LOGOUT_SUCCESS:
      return createInitialState();
    default:
      return state;
  }
}
