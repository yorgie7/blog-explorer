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
    <div className="LoggedOut" >
      <h3>You are not logged in, 
     please  
      <Link to='/login'><span style={{fontWeight: '400', margin:'0 5px'}}> Login </span></Link>
      to continue.</h3>
    </div>
    )
}

const RouterComponent = () => {

  const state = { isUserAuthenticated: localStorage.getItem("isAuth") };


  async function doUserAuthen() {
    await localStorage.setItem("isAuth", true);
    window.location.href = "/";
  }

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
