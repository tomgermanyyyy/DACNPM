import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import showhide from './showhide';
export default combineReducers({ alert, auth,showhide });
