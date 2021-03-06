import { combineReducers } from 'redux';
 
 import flashMessages from './reducers/flashMessages';
 import auth from './reducers/auth';
 import artist from './reducers/artist';
 import artists from './reducers/artists';
 import countries from './reducers/countries';
 import genres from './reducers/genres';
 import names from './reducers/names';
 import states from './reducers/states';
 
 export default combineReducers({
   flashMessages,
   auth,
   artist,
   artists,
   countries,
   genres,
   names,
   states
 });