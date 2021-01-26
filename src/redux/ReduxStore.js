import { combineReducers, createStore } from 'redux';
import siteBarReducer from './siteBarReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from "./usersReducer";

//combine Reducers
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  siteBar: siteBarReducer,
  usersPage: usersReducer,
});

//create store
let store = createStore(reducers);

window.store = store;

export default store;
