import { combineReducers } from 'redux';
import fetching from './reducers/fetching';
import user from './reducers/user';

export default combineReducers({
  fetching,
  user
});