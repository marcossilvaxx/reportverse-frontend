import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Index';
import LoginPage from '../pages/loginPage/loginPageComponent';
import NewPost from '../pages/newPost';
import RegisterPage from '../pages/registerPage/registerPageComponent';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={LoginPage} />
      <Route exact path="/register" render={RegisterPage} />
      <Route exact path="/home" render={Home} />
      <Route exact path="/postar" render={NewPost} />
    </Switch>
  );
}

export default Routes;