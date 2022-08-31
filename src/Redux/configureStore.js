import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import appReducer from './app-store/reducers';
import userReducer from './user-store/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  app: appReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
