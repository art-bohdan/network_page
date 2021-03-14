import React from 'react';
import ReactDOM from 'react-dom'
import SocialNetwork from './App';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SocialNetwork/>, div)
  ReactDOM.unmountComponentAtNode(div);
});
