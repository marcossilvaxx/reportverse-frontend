import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Index';
import LoginPage from '../pages/loginPage/loginPageComponent';
import Map from '../pages/map';
import NewPost from '../pages/newPost';
import RegisterPage from '../pages/registerPage/registerPageComponent';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={LoginPage} />
      <Route exact path="/register" render={RegisterPage} />
      <Route exact path="/home" render={Home} />
      <Route exact path="/postar" render={NewPost} />
      <Route exact path="/mapa" render={Map} />
    </Switch>
  );
}

export default Routes;