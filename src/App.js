import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer  from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <div className='App-wrapper'>
      <HeaderContainer/>
      <NavBar/>
      <div className='App-wrapper-style'>
        {/*Route this component which returns JSX when the path = url*/}
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/about' render={() => <About/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
      </div>
    </div>
  );
};

export default App;
