import React from "react";
import './Style.scss';
import MenuMobile from "../../components/menuMobile/Index";
import Postagem from "../../components/postagem/Index";
import LOGOPRINCIPAL from "../../assets/REPORTVERSE-LOGO.png"
import { listarTodasPostagens } from "../../axios/response/response";


const Home = () => {

    let postagens = listarTodasPostagens();

    return(
        <>
        <div className="home">
          <div className="home-header">
            <div className="home-header-limitador">
              <img src={LOGOPRINCIPAL} alt="logo do reportverse"/>
            </div>
          </div>
        
          {postagens.map((postagem, idx) => {

            return(
              <Postagem
                horario={postagem.horario}
                descricao={postagem.descricao}
                latitude={postagem.latitude}
                longitude={postagem.longitude}
                nome={postagem.nome}
                comentarios={postagem.comentarios}
                imagem={postagem.imagem}
                key={idx}
                />
            )
          })}
                  
          <MenuMobile selectIcon="home" />
        </div>
        </>
    )
}

export default Home;