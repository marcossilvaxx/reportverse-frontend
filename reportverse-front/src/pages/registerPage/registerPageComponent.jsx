import React from 'react';
import LOGOPRINCIPAL from "../../assets/logo.png";
import logoMapa from '../../assets/Logo_Mapa.png';
import Button from '../../components/Button';

import './registerPageStyle.scss' ;

const RegisterPage = () => {


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
                    <textarea name = "login" placeholder='Insira o seu email de login'></textarea>
                </section>

                <section>
                    <h5>Senha</h5>
                    <textarea name = "senha" placeholder='Algo seguro cai bem'></textarea>
                </section>

                <section>
                    <h5>Nome</h5>
                    <textarea name = "nome" placeholder='Seu nome publico no site'></textarea>
                </section>

                <section>
                    <h5>Curso</h5>
                    <textarea name = "curso"> </textarea>
                </section>

                <Button className="Button">
                    Cadastrar
                </Button>
                <hr></hr>
                <h6>Já tenho conta | Login</h6>
            </div>

            
        
        </>
    )
}

export default RegisterPage;