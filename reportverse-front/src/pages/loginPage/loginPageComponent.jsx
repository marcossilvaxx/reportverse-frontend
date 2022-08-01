import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import Button from '../../components/Button';

import LOGOPRINCIPAL from "../../assets/logo.png";
import logoMapa from '../../assets/Logo_Mapa.png';

import './loginPageStyle.scss' ;
import axios from 'axios';
import getUserToken from '../../utils/getUserToken';

function LoginPage ({ history }) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const isValid = () => !!(emailRef.current.value && passwordRef.current.value);

    const handleSubmit = async () => {
        if(!isValid()) {
            alert("Preencha todos os campos");
            return;
        }
        
        const data = new FormData();

        data.append("username",emailRef.current.value);
        data.append("password",passwordRef.current.value);

        const response = await axios.post('https://reportverse.herokuapp.com/api/login', data);

        const { access_token } = response.data;

        localStorage.setItem("reportverse:user_token", access_token);

        history.push("/home");
    }

    useEffect(() => {
        const access_token = getUserToken();
    
        if (access_token) {
          history.push("/home")
        }
        
      }, [])

    return(
        <>
            <div className="split left">
                <div className='centered'>
                    <h1> Se junte ao <strong>ReportVerse </strong> para ajudar a comunidade academica a melhorar a infraestrutura da UFCG </h1>
                    <div>
                        <img src={logoMapa} alt="logoMapa"/>
                    </div>
                    
                </div>
            </div>

            <div className="split right">
                <div className='imagem'>
                    <img src={LOGOPRINCIPAL} alt="logo"/>
                </div>
                <section>
                    <h5>Login</h5>
                    <input name = "login" placeholder='Insira o seu email de login' ref={emailRef}></input>
                </section>

                <section>
                    <h5>Senha</h5>
                    <input type = "password" name = "senha" placeholder='Insira a sua senha' ref={passwordRef}></input>
                </section>

                <Button className="Button" onClick={handleSubmit}>
                    Fazer Login
                </Button>
                <div className='final'>
                    <h6>Esqueci a senha</h6>
                    <hr></hr>
                    <h6>Cadastre sua conta <Link to="/register">aqui</Link></h6>
                </div>
            </div>
        </>
    )
}

export default LoginPage;