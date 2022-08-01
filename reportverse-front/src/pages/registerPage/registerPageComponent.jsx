import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Button from '../../components/Button';

import LOGOPRINCIPAL from "../../assets/logo.png";
import logoMapa from '../../assets/Logo_Mapa.png';


import './registerPageStyle.scss' ;

function RegisterPage({ history }) {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const nameRef = useRef(null);

    const isValid = () => !!(emailRef.current.value && passwordRef.current.value && confirmPasswordRef.current.value && nameRef.current.value && (passwordRef.current.value === confirmPasswordRef.current.value));

    const handleSubmit = async () => {
        console.log(isValid());
        if (!isValid()) {
            alert("Preencha todos os campos");
            return;
        }
        
        const data = {
            name: nameRef.current.value,
            password: passwordRef.current.value,
            passwordConfirmation: confirmPasswordRef.current.value,
            username: emailRef.current.value,
        }
    
        await axios.post('https://reportverse.herokuapp.com/api/usuario/cadastro', data);

        alert("Cadastro realizado com sucesso!");

        history.push("/");
    }

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
                    <input name = "senha" placeholder='Algo seguro cai bem' type = 'password' ref={passwordRef}></input>
                </section>

                <section>
                    <h5>Confirme a senha</h5>
                    <input name = "confirmacaoSenha" placeholder='As senhas devem ser iguais' type = 'password' ref={confirmPasswordRef}></input>
                </section>

                <section>
                    <h5>Nome</h5>
                    <input name = "nome" placeholder='O seu nome completo' ref={nameRef}></input>
                </section>

                <Button className="Button" onClick={handleSubmit}>
                    Cadastrar
                </Button>

                <hr></hr>
                <h6>Já tenho uma conta | <Link to="/">Login</Link></h6>
            </div>
        </>
    )
}

export default RegisterPage;