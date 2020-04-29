import React from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <ul>
        <ul>
          <Link to ='/login'>Login</Link>
        </ul>
        <ul>
          <Link to ='/protected'>Protected Page</Link>
        </ul>
      </ul>
      <Switch>
        <PrivateRoute exact path ='/protected' component={FriendsList}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
