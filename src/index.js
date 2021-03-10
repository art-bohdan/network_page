import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/ReduxStore";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  {/* connect component provider(it used context API )store in order for children to use store library react-redux*/}
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>, document.getElementById('root'));
