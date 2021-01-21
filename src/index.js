import React from 'react';
import store from './redux/ReduxStore';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let renderEntireThree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store = {store}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

renderEntireThree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireThree(state);
});
