import React, {useState} from "react";
import './Style.scss';
import MenuMobile from "../../components/menuMobile/Index";
import Postagem from "../../components/postagem/Index";
import LOGOPRINCIPAL from "../../assets/REPORTVERSE-LOGO.png"
import { listarTodasPostagens } from "../../axios/response/response";
import { useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";





const Home = () => {   
    const [postagens,setPostagens] = useState([]);

    const [width] = useWindowSize();
    
    useEffect(()=>{
      pegarPostagens();
    },[]);

    const pegarPostagens = async () => {
      const postagens = await listarTodasPostagens();
      setPostagens(postagens);
    }
    
    return(
        <>
        <div className="home">
          {width <= 768 && (
            <div className="home-header">
              <div className="home-header-limitador">
                <img src={LOGOPRINCIPAL} alt="logo do reportverse"/>
              </div>
            </div>
          )}
          
          {postagens.length>0 && postagens.map((postagem,idx) => {
            return(
          
              <React.Fragment key={`${postagem.nome}-${idx}`}>
              <Postagem
                horario={postagem.horario}
                descricao={postagem.descricao}
                latitude={postagem.latitude}
                longitude={postagem.longitude}
                nome={postagem.nome}
                comentarios={postagem.comentarios}
                imagem={postagem.imagem}
                idPostagem={postagem.postagemId}
                />
              </React.Fragment>
              
              
              
            )
          })}
                  
          <MenuMobile selectIcon="home" />
        </div>
        </>
    )
}

export default Home;