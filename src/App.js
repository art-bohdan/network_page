import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';
import About from './components/About/About';
import Music from './components/Music/Music';
import Route from 'react-router-dom/es/Route';

const App = props => {
  debugger
  return (
    <div className='App-wrapper'>
      <Header />
      <NavBar />
      <div className='App-wrapper-style'>
        <Route path='/profile' render={() => (
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route path='/dialogs' render={() => <Dialogs store = {props.store}/>} />
        <Route path='/about' render={() => <About />} />
        <Route path='/music' render={() => <Music />} />
      </div>
    </div>
  );
};

export default App;
