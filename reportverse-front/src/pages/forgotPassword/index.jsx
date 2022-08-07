import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import Button from '../../components/Button';

import LOGOPRINCIPAL from "../../assets/logo.png";
import logoMapa from '../../assets/Logo_Mapa.png';

import './styles.scss' ;
import axios from 'axios';
import getUserToken from '../../utils/getUserToken';

function ForgotPassword ({ history }) {
    const emailRef = useRef(null);

    const isValid = () => !!(emailRef.current.value);

    const handleSubmit = async () => {
        if(!isValid()) {
            alert("Preencha todos os campos");
            return;
        }

        try {
            await axios.post('https://reportverse.herokuapp.com/api/senha/esqueci-senha', emailRef.current.value, {
                headers: { 'Content-Type': 'text/plain'}
            });

            alert("Link de recuperação de senha enviado! Verifique sua caixa de entrada.")

            history.push("/");
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        const access_token = getUserToken();
    
        if (access_token) {
          history.push("/home")
        }
        
      }, [])

    return(
        <div className="forgot-wrapper">
            <div className="split left">
                <div className='centered'>
                    <h1> Se junte ao <strong>ReportVerse </strong> para ajudar a comunidade academica a melhorar a infraestrutura da UFCG </h1>
                    <img src={logoMapa} alt="logoMapa"/>                    
                </div>
            </div>

            <div className="split right">
                <div className="right-content">
                    <div className='imagem'>
                        <img src={LOGOPRINCIPAL} alt="logo"/>
                    </div>
                    <section>
                        <h5>Login</h5>
                        <input name = "login" placeholder='Insira o seu email de login' ref={emailRef}></input>
                    </section>

                    <Button className="Button" onClick={handleSubmit}>
                        Enviar email de recuperação
                    </Button>
                    <div className='final'>
                        <h6>Fazer <Link to="/" className="green-link">login</Link></h6>
                        <p><hr/>OU<hr/></p>
                        <h6>Cadastre sua conta <Link to="/register" className="green-link">aqui</Link></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;