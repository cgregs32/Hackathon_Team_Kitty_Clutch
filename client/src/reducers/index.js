import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import posts from './posts'
import users from './users'
import bios from './bios'

const rootReducer = combineReducers({
  user,
  flash,
  posts,
  users,
  bios,
});

export default rootReducer;
