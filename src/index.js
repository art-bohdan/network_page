import React from 'react';
import store from './redux/ReduxStore';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    {/* connect component provider(it used context API )store in order for children to use store library react-redux*/}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
