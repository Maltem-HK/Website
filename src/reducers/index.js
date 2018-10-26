import { combineReducers } from 'redux';
import welcome from './welcome';
import socialNetworks from './socialNetworks';

export default combineReducers({
  welcome,
  socialNetworks,
});
