import apiReducer from './api';
import { combineReducers } from 'redux';

export createAction = (type, payload = {}) => {
  return (
    type,
    ...payload
  );
}

export default combineReducers({
  api: apiReducer
});
