import {applyMiddleware, combineReducers, createStore} from 'redux';
import siteBarReducer from './siteBarReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
//от сюда thunk импортируем это thunkMiddleware
//combine Reducers
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  siteBar: siteBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

//create store
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
