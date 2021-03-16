import React from 'react';
import UserList from '../pages/UsersList';
import PostsList from '../pages/PostsList';
import PostDetails from '../components/PostDetails';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import '../App';


const LoginFailed = () => {
  return (
    <div className="App">
      <h2>You are not logged in... </h2>
      <Link to='/login'> Login </Link>
    </div>)
}

const RouterComponent = () => {

  const state = { isUserAuthenticated: localStorage.getItem("isAuth") };


  async function doUserAuthen() {
    await localStorage.setItem("isAuth", true);
    window.location.href = "/";
    setInterval(function(){  window.location.reload = "/"; },3000);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"
            render={() => {
              return (
                state.isUserAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />)
            }} />

          <Route exact path="/users/"  >
            {
              state.isUserAuthenticated ? <UserList /> : <LoginFailed />
            }
          </Route>

          <Route path="/blogs/" exact>
            {
              state.isUserAuthenticated ? <PostsList /> : <LoginFailed />
            }
          </Route>

          <Route path="/home/" exact>
            {
              state.isUserAuthenticated ? <HomePage /> : <LoginFailed />
            }
          </Route>

          <Route path="/blogs/:blog_id" exact
            component={state.isUserAuthenticated ? PostDetails : LoginFailed} >

          </Route>

          <Route path="/login" >
            <LoginPage doLogin={doUserAuthen} />
          </Route>

        </Switch>
      </Router>
    </>
  );
};
export default RouterComponent;
