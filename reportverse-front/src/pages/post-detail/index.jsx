import React from "react";
import './style.scss';
import { Link } from "react-router-dom";
import VOLTAR from "../../assets/voltar.png";
import { getPostagem } from "../../axios/response/response";
import { useState, useEffect } from "react";
import Postagem from "../../components/postagem/Index";
import { useParams } from "react-router-dom";

const PostDetail = () => {

    const [postagem,setPostagem] = useState();
    let { postagemId } = useParams();

    useEffect(()=>{
        pegarPostagem();
      },[]);
  
      const pegarPostagem = async () => {
        const postagem = await getPostagem(postagemId);
        setPostagem(postagem);
      }

    return(
        <>
        <div className="detalhes-postagem">
            <div className="comentarios">
                <Link to="/mapa"><div className="comentarios-voltar">
                    <img src={VOLTAR} alt="voltar"/>
                    <span>Detalhes denúncia</span>
                </div>
                </Link>

                {postagem ? <Postagem
                    horario={postagem?.horario}
                    descricao={postagem?.descricao}
                    latitude={postagem?.latitude}
                    longitude={postagem?.longitude}
                    nome={postagem?.nome}
                    comentarios={postagem?.comentarios}
                    imagem={postagem?.imagem}
                    idPostagem={postagem?.postagemId}
                    reports={postagem?.reports}
                    likes={postagem?.likes}
                /> : null }
                

            </div>
        </div>
        
        </>
    )
}

export default PostDetail;