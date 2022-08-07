import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Comentarios from '../components/comentarios/Index';
import DetalhesLocalizacao from '../components/DetalhesLocalizacao/Index';
import Judgement from '../pages/admin/judgement';
import AdminRoute from './AdminRoute';
import Reports from '../pages/admin/reports';
import Home from '../pages/home/Index';
import LoginPage from '../pages/loginPage/loginPageComponent';
import Map from '../pages/map';
import NewPost from '../pages/newPost';
import RegisterPage from '../pages/registerPage/registerPageComponent';
import getUserToken from '../utils/getUserToken';
import PostDetail from '../pages/post-detail';
import ForgotPassword from '../pages/forgotPassword';
import RecoverPassword from '../pages/recoverPassword';

function Routes() {
  const history = useHistory();

  useEffect(() => {
    const access_token = getUserToken();

    const isPublicAccess = ["/", "/register", "/esqueci-minha-senha", "/recuperacao-senha"].includes(
      `/${history.location.pathname.split('/')[1]}`
    );

    if (!access_token && !isPublicAccess) {
      history.push("/");
    }
    
  }, [])

  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/esqueci-minha-senha" component={ForgotPassword} />
      <Route exact path="/recuperacao-senha/:recover_token" component={RecoverPassword} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/postar" component={NewPost} />
      <Route exact path="/mapa" component={Map} />
      <Route exact path="/admin">
        <AdminRoute>
          <Reports/>
        </AdminRoute>
      </Route>
      <Route exact path="/admin/report/:id">
        <AdminRoute>
          <Judgement/>
        </AdminRoute>
      </Route>
      <Route exact path="/localizacao/:postagemId" component={DetalhesLocalizacao} />
      <Route exact path="/comentarios/:postagemId" component={Comentarios} />
      <Route exact path="/detalhes/:postagemId" component={PostDetail} />
    </Switch>
  );
}

export default Routes;