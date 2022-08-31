import {USER_LOGOUT} from '../app-store/keys';
import {TOKEN_REFRESHED, CURRENT_USER} from './keys';

const initialState = {
  userToken: null,
  currentUser: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case TOKEN_REFRESHED: {
      return {
        ...state,
        userToken: action.data,
      };
    }
    case CURRENT_USER: {
      return {
        ...state,
        currentUser: action.data,
      };
    }
    case USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
}
