import React from 'react';
import UserList from '../components/UsersList';
import PostsList from '../components/PostsList';
import PostDetails from '../components/PostDetails';
import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';

import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import '../App';


const RouterComponent = () => {

  const state= {isUserAuthenticated: true};

   async function doUserAuthen() {
    await localStorage.setItem("isAuth", true);
    window.location.href="/";
   
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
            {state.isUserAuthenticated ? <UserList /> : (
              <div className="App">
                <h2>You are not logged in... </h2>
                <Link to='/login'>Login</Link>
              </div>)
            }
          </Route>
          <Route path="/blogs/" exact>

            {state.isUserAuthenticated ? <PostsList /> : (
              <div className="App">
                <h2>You are not logged in... </h2>
                <Link to='/login'>Login</Link>
              </div>)
            }
          </Route>

          <Route path="/home/" exact>
            {state.isUserAuthenticated ? <HomePage /> : (
              <div className="App">
                <h2>You are not logged in... </h2>
                <Link to='/login'>Login</Link>
              </div>)
            }
          </Route>
          <Route path="/blogs/:blog_id" exact component={PostDetails} />

          <Route path="/login" >
            <LoginPage doLogin={doUserAuthen} />
          </Route>

        </Switch>
      </Router>
    </>
  );
};
export default RouterComponent;
