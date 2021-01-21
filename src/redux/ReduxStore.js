import {combineReducers, createStore} from "redux";
import siteBarReducer from "./siteBarReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  siteBar: siteBarReducer});
let store = createStore(reducers);

export default store;