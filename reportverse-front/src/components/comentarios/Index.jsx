import React from "react"
import "./Style.scss"
import VOLTAR from "../../assets/voltar.png";
import Comentario from "../comentario/Index";
import LOCATIONICON from "../../assets/location-icon.png";
import { comentarPostagem } from "../../axios/response/response";
import { useState } from "react";
import { useEffect } from "react";


const Comentarios = ({texto,callback,comentarios, nomePostagem, horarioPostagem, idPostagem}) => {

    const [comment,setComment] = useState({comentario:""});
    const {comentario} = comment;

    

    async function comentar(){
        await comentarPostagem(idPostagem,comentario);
        setComment({comentario: ""});
    }
    
    const handleChange =(event) => {
        const {name,value} = event.target;
        setComment({...comment, [name]:value});  
      };



    function formataHorario(horario){
        const novoHorario = `${horario[8]+horario[9]} - ${horario[5]+horario[6]} - ${horario[0]+horario[1]+horario[2]+horario[3]}`
        return novoHorario;
    }



    return(
        <>
        <div className="comentarios">
        <div className="comentarios-voltar"  onClick={()=>{callback(false)}}>
            <img src={VOLTAR} alt="voltar"/>
            <span>Comentários</span>
        </div>
        
            <div className="postagem">
                <div className="postagem-header">
                    <div className="postagem-header-left">
                        <h3>{nomePostagem}</h3>
                        <p>{horarioPostagem}</p>
                    </div>
                    <div className="postagem-header-right">
                        <a><img src={LOCATIONICON}  alt="localizacao"/></a>
                    </div>
                </div>

                <div className="postagem-texto">
                    {texto}
                </div>
                 
                
            </div>
            <div className="comentarios-lista">
                {comentarios.map((comentario,idx) => {
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
        
        </>
        
    )

}

export default Comentarios;