import {combineReducers} from 'redux';
import appReducer from './app-store/reducers';
import shoppingReducer from './shopping-store/reducers';
import userReducer from './user-store/reducers';

let mainReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  shopping: shoppingReducer,
});

const rootReducer = (state, action) => {
  if (action.type == 'USER_LOGOUT' || action.type == 'DELETE_USER') {
    state = undefined;
  }

  return mainReducer(state, action);
};

export default rootReducer;
