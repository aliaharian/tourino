import { combineReducers } from "redux";
import user from './user'
import hotel from './hotel'
import area from './area'
export default combineReducers({
  user,
  hotel,
  area,

});
