import { combineReducers } from 'redux';
import addToPlaylist from './playlist';

const rootReducer = combineReducers({
 Queue: addToPlaylist,
});

export default rootReducer