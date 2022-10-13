import {SHOPPING} from './keys';

const initialState = {
  shopping: [],
};

export default function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case SHOPPING: {
      return {
        ...state,
        shopping: action.data,
      };
    }

    default:
      return state;
  }
}
