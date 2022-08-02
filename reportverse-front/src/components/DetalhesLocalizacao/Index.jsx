import React from "react";
import "./Style.scss";
import VOLTAR from "../../assets/voltar.png";
import LOCATIONICON from "../../assets/location-icon.png";
import { Link, useParams } from "react-router-dom";
import { getPostagem } from "../../axios/response/response";
import { useEffect } from "react";
import { useState } from "react";
import Map from "../Map/index.jsx";

const DetalhesLocalizacao = () => {

    let { postagemId } = useParams();

    const [postagem,setPostagem] = useState();
    useEffect(()=>{
        pegarPostagem();
      },[]);

      const pegarPostagem = async () => {
        const postagemResponse = await getPostagem(postagemId);
        setPostagem(postagemResponse);
      }

      function formataHorario(horario){
        if(horario!= null){
            const novoHorario = `${horario[8]+horario[9]} - ${horario[5]+horario[6]} - ${horario[0]+horario[1]+horario[2]+horario[3]}`
            return novoHorario;
        }
    }

    const reportFocado = {
        lat: postagem?.latitude,
        lon: postagem?.longitude
    }




    return(
        <>
        <div className="detalhesLocalizacao">
            <Link to="/home">
            <div className="detalhesLocalizacao-voltar">
                <img src={VOLTAR} alt="voltar"/>
                <span>Localização</span>
            </div>
            </Link>

            <div className="postagem">
                <div className="postagem-header" style={{"background":"#fff"}}>
                    <div className="postagem-header-left">
                        <h3>{postagem?.nome}</h3>
                        <p>{formataHorario(postagem?.horario)}</p>
                    </div>
                    
                </div>

                <div className="postagem-texto">
                    {postagem?.descricao}
                </div>
                 
            </div>

            
            <div className="detalhesLocalizacao-mapa">
                {postagem?<Map height={"100%"} width={"100%"} focusedReport={reportFocado}  />:null }
            </div>

            
            

        </div>
        </>
    )
}

export default DetalhesLocalizacao;