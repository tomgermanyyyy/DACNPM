import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import showhide from './showhide';
import sidebar from './sidebar';
export default combineReducers({ alert, auth, showhide, sidebar });
