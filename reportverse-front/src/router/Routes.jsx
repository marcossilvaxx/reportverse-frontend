import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Comentarios from '../components/comentarios/Index';
import DetalhesLocalizacao from '../components/DetalhesLocalizacao/Index';
import Judgement from '../pages/admin/judgement';
import Reports from '../pages/admin/reports';
import Home from '../pages/home/Index';
import LoginPage from '../pages/loginPage/loginPageComponent';
import Map from '../pages/map';
import NewPost from '../pages/newPost';
import RegisterPage from '../pages/registerPage/registerPageComponent';
import getUserToken from '../utils/getUserToken';
import PostDetail from '../pages/post-detail';

function Routes() {
  const history = useHistory();

  useEffect(() => {
    const access_token = getUserToken();

    if (!access_token) {
      history.push("/")
    }
    
  }, [])

  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/postar" component={NewPost} />
      <Route exact path="/mapa" component={Map} />
      <Route exact path="/admin" component={Reports} />
      <Route exact path="/admin/report/:id" component={Judgement} />
      <Route exact path="/localizacao/:postagemId" component={DetalhesLocalizacao} />
      <Route exact path="/comentarios/:postagemId" component={Comentarios} />
      <Route exact path="/detalhes/:postagemId" component={PostDetail} />
    </Switch>
  );
}

export default Routes;