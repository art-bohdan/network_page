import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Music from './components/Music/Music';
import Route from 'react-router-dom/es/Route';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from "./components/Users/Users";

const App = () => {
    return (
        <div className='App-wrapper'>
            <Header/>
            <NavBar/>
            <div className='App-wrapper-style'>
                {/*Route this component which returns JSX when the path = url*/}
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/about' render={() => <About/>}/>
                <Route path='/music' render={() => <Music/>}/>
              <Route path='/users' render={() => <Users/> }/>
            </div>
        </div>
    );
};

export default App;
