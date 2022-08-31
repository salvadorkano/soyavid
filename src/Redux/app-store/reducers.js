import {INITIALIZE, USER_LOGOUT, OPEN_RESTAURANT} from './keys';

const initialState = {
  storeInitialized: false,
  appLang: null,
  clean: false,
  restaurantOpen: null,
};

export default function RappReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE: {
      return {
        ...state,
        storeInitialized: action.data,
      };
    }
    case OPEN_RESTAURANT: {
      return {
        ...state,
        restaurantOpen: action.data,
      };
    }

    case USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
}
