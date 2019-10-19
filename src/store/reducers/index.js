import apiReducer from './api';
import { combineReducers } from 'redux';
import videosReducer from './video';
import channelsReducer from './channels';
import commentsReducer from './comment';

// export default (state = {}, action) => {
//   switch(action.type) {
//     default:
//       return state;
//   }
// }

export default combineReducers({
  api: apiReducer,
  videos: videosReducer,
  channels: channelsReducer,
  comments: commentsReducer
});
