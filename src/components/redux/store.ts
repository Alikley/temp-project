import { legacy_createStore, combineReducers } from 'redux';
import cartReducer from './reducer/Reducer';

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = legacy_createStore(rootReducer);

export default store;