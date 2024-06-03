import {configureStore, combineReducers} from '@reduxjs/toolkit';
import todosSlice from './slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from '@react-native-async-storage/async-storage';

let persistConfig = {
  key: 'root',
  storage,
};

let rootReducer = combineReducers({
  todos: todosSlice,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
