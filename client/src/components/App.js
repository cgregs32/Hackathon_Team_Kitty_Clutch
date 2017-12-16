import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Profile from './profile'
import Whispurrs from './Whispurrs'
import UserPage from './UsersPage'
import '../styles/blah.css'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <div className="everythingWrap">
      <Flash />
      <FetchUser>
      <Switch>
      <Route exact path='/' component={Home} />
      <ProtectedRoute exact path='/profile' component={Profile} />
      <ProtectedRoute exact path='/users' component={UserPage} />
      <ProtectedRoute exact path='/whispurrs' component={Whispurrs} />
      <AuthRoute exact path='/login' component={Login} />
      <AuthRoute exact path='/register' component={Register} />
      <Route component={NoMatch} />
      </Switch>
      </FetchUser>
      </div>
      </div>
    );
  }
}

export default App;
