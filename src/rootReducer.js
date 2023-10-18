// rootReducer.js

import { combineReducers } from 'redux';
import userReducer from './Reducers/userSlider'; 
import productReducer from './Reducers/productSlice';

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
});

export default rootReducer;
