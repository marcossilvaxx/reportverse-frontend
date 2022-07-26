import React from "react";
import './Style.scss';
import LOCATIONICON from "../../assets/location-icon.png";
import { useState } from "react";
import IMAGEMPOST from "../../assets/imagem-post.png";
import REPORTNEUTRO from "../../assets/report-neutro.png";
import REPORTACTIVE from "../../assets/report-active.png";
import LIKENEUTRO from "../../assets/like-neutro.png";
import LIKEACTIVE from "../../assets/like-active.png";
import COMENTAR from "../../assets/comentar.png";
import Comentarios from "../comentarios/Index";




const Postagem = ({horario, descricao, latitude,longitude,nome,comentarios, imagem, key}) => {

    // horario: post.horario,
    // descricao: post.description,
    // latitude: post.latitude,
    // longitude: post.longitude,
    // nome: nome, //lembrar de configurar
    // comentarios: post.comentarios
    // imagem:post.imagem

    const [isLiked,setIsLiked] = useState(false);
    const [isReported,setIsReported] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const [isCommentOpen,setIsCommentOpen] = useState(false);

    

    const textinho = "Gostaria de denunciar uma obra parada em frente ao bloco tal do departamento de Engenharia Elétrica. Já fazem 6 meses que não noto nenhuma mudança na construção."

    function Collapsible(texto){
        let textoReduzido = texto.split(" ", 15);
        let textoSemExpandir = "";

        textoReduzido.forEach(element => {
            textoSemExpandir = textoSemExpandir + element + " "
        });


        textoSemExpandir = textoSemExpandir  + "..."
        
        return(
        <>
            <div className="collapsible">   
                <div className="collapsible-text">
                {isOpen ? texto : textoSemExpandir}
                <button onClick={()=>{setIsOpen(!isOpen)}}>{isOpen ? "veja menos" : "veja mais"}</button>
                </div>
            </div>
        </>   )
    }


    return(
        <>
        {isCommentOpen ? <Comentarios texto={descricao} callback={setIsCommentOpen} comentarios={comentarios} nomePostagem={nome} horarioPostagem={horario}/> : 
        (<div className="postagem" key={key}>
            <div className="postagem-header">
                <div className="postagem-header-left">
                    <h3>{nome}</h3>
                    <p>{horario}</p>
                </div>
                <div className="postagem-header-right">
                    <a><img src={LOCATIONICON} /></a>
                </div>
            </div>

            <div className="postagem-texto">
                {Collapsible(descricao)}
            </div>

            <div className="postagem-foto">
                <img src={imagem} />
            </div>

            <div className="postagem-barra-acoes">
                <div className="postagem-barra-acoes-conteudo">
                    <div className="postagem-barra-acoes-conteudo-left">
                        <div onClick={()=>{setIsLiked(!isLiked)}}>
                            {isLiked ? (<img src={LIKEACTIVE}/>) : (<img src={LIKENEUTRO}/>) }
                        </div>
                        <div className="postagem-barra-acoes-conteudo-left-comentario" onClick={()=>{setIsCommentOpen(true)}}>
                            <img src={COMENTAR} /> <span>ver comentarios</span>
                        </div>
                        
                    </div>
                    <div className="postagem-barra-acoes-conteudo-right" onClick={()=>{setIsReported(!isReported)}}>
                        {isReported ? (<img src={REPORTACTIVE}/>) : (<img src={REPORTNEUTRO}/>) }
                    </div>
                </div>

            </div>
        </div>)}
        
        </>
    )
}

export default Postagem;