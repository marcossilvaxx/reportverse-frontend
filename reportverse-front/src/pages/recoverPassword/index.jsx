import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import Button from '../../components/Button';

import LOGOPRINCIPAL from "../../assets/logo.png";
import logoMapa from '../../assets/Logo_Mapa.png';

import './styles.scss' ;
import axios from 'axios';

function RecoverPassword ({ history }) {
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const { recover_token } = useParams();

    const isValid = () => !!(passwordRef.current.value && confirmPasswordRef.current.value);
    const arePasswordsEqual = () => passwordRef.current.value === confirmPasswordRef.current.value;

    const handleSubmit = async () => {
        if(!isValid()) {
            alert("Preencha todos os campos");
            return;
        }

        if(!arePasswordsEqual()) {
            alert("A senha e a confirmação não são iguais! Verifique os campos");
            return;
        }

        try {
            await axios.post(`https://reportverse.herokuapp.com/api/senha/trocar-senha/${recover_token}`, {
                password: passwordRef.current.value,
                passwordConfirmation: confirmPasswordRef.current.value,
            });

            alert("Senha alterada!")

            history.push("/");
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

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
                        <h5>Senha</h5>
                        <input name = "senha" placeholder='Algo seguro cai bem' type = 'password' ref={passwordRef}></input>
                    </section>

                    <section>
                        <h5>Confirme a senha</h5>
                        <input name = "confirmacaoSenha" placeholder='As senhas devem ser iguais' type = 'password' ref={confirmPasswordRef}></input>
                    </section>

                    <Button className="Button" onClick={handleSubmit}>
                        Alterar senha
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

export default RecoverPassword;