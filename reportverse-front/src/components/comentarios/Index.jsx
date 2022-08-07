import React from "react"
import "./Style.scss"
import VOLTAR from "../../assets/voltar.png";
import Comentario from "../comentario/Index";
import LOCATIONICON from "../../assets/location-icon.png";
import { comentarPostagem } from "../../axios/response/response";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostagem } from "../../axios/response/response";


const Comentarios = () => {

    const [comment,setComment] = useState({comentario:""});
    const {comentario} = comment;
    let { postagemId } = useParams();
    const [postagem,setPostagem] = useState();

    useEffect(()=>{
        pegarPostagem();
      },[]);

      const pegarPostagem = async () => {
        const postagemResponse = await getPostagem(postagemId);
        setPostagem(postagemResponse);
      }

    

    async function comentar(){
        await comentarPostagem(postagem.postagemId,comentario);
        setComment({comentario: ""});
        window.location.reload();
    }
    
    const handleChange =(event) => {
        const {name,value} = event.target;
        setComment({...comment, [name]:value});  
      };

      function formataHorario(horario){
        if(horario!= null){
            const novoHorario = new Date(horario).toLocaleString('pt-BR');
            return novoHorario;
        }
    }





    return(
        <div className="comentarios-wrapper">
            <div className="comentarios">
            <Link to="/home"><div className="comentarios-voltar">
                <img src={VOLTAR} alt="voltar"/>
                <span>Comentários</span>
            </div>
            </Link>
            
                <div className="postagem">
                    <div className="postagem-header" style={{"background":"#fff"}}>
                        <div className="postagem-header-left">
                            <h3>{postagem?.nome}</h3>
                            <p>{formataHorario(postagem?.horario)}</p>
                        </div>
                        <div className="postagem-header-right">
                            <a><img src={LOCATIONICON}  alt="localizacao"/></a>
                        </div>
                    </div>

                    <div className="postagem-texto">
                        {postagem?.descricao}
                    </div>
                    
                    
                </div>
                <div className="comentarios-lista">
                    {postagem?.comentarios.map((comentario,idx) => {
                        return(
                            <div key={`${idx}-${comentario.appUser.name}`} className="comentarios-lista-comentario">
                            <Comentario nome={comentario.appUser.name} dataPostagem={formataHorario(comentario.creationDate)}  texto={comentario.text}  />
                            </div>
                        )
                    })}          
                </div>

                <div className="comentarios-digitar">
                    <div className="comentarios-digitar-container">
                        <div className="comentarios-digitar-container-text">
                            <input placeholder="digite algo..." value={comentario} name="comentario" onChange={handleChange}/>
                        </div>
                        <div className="comentarios-digitar-container-action" onClick={()=> {comentar()}}>
                            Comentar
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
    )

}

export default Comentarios;