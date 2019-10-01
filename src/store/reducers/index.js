import apiReducer from './api';
import { combineReducers } from 'redux';

export default (state = {}, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  api: apiReducer
});