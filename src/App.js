import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/ReduxStore';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <BrowserRouter>
        {/* connect component provider(it used context API )store in order for children to use store library react-redux*/}
        <Provider store={store}>
          <div className='App-wrapper'>
            <HeaderContainer />
            <NavBar />
            <div className='App-wrapper-style'>
              {/*Route this component which returns JSX when the path = url*/}
              <Route
                path='/profile/:userId?'
                render={() => <ProfileContainer />}
              />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/about' render={() => <About />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/login' render={() => <Login />} />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
