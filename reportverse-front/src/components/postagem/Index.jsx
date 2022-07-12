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
import Comentario from "../comentario/Index";


const Postagem = () => {

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

    const  OpenComment = ()=> {
        return(
            <>
            <div className="comentarios">
            <span onClick={()=>{setIsCommentOpen(false)}}>voltar</span>
                <div className="postagem">
                    <div className="postagem-header">
                        <div className="postagem-header-left">
                            <h3>Fulano123</h3>
                            <p>09:26 - 07/06/2022</p>
                        </div>
                        <div className="postagem-header-right">
                            <a><img src={LOCATIONICON} /></a>
                        </div>
                    </div>

                    <div className="postagem-texto">
                        {textinho}
                    </div>
                    
                    
                </div>
                <div className="comentarios-lista">
                        <Comentario nome="Fulano123" dataPostagem={"09:27 - 07/06/2022"}  texto="É imoral isso, também percebo!" />
                </div>
            </div>
            </>
            
        )
        
    } 

    return(
        <>
        {isCommentOpen ? OpenComment() : null }
        <div className="postagem">
            <div className="postagem-header">
                <div className="postagem-header-left">
                    <h3>Fulano123</h3>
                    <p>09:26 - 07/06/2022</p>
                </div>
                <div className="postagem-header-right">
                    <a><img src={LOCATIONICON} /></a>
                </div>
            </div>

            <div className="postagem-texto">
                {Collapsible(textinho)}
            </div>

            <div className="postagem-foto">
                <img src={IMAGEMPOST} />
            </div>

            <div className="postagem-barra-acoes">
                <div className="postagem-barra-acoes-conteudo">
                    <div className="postagem-barra-acoes-conteudo-left">
                        <div onClick={()=>{setIsLiked(!isLiked)}}>
                            {isLiked ? (<img src={LIKEACTIVE}/>) : (<img src={LIKENEUTRO}/>) }
                        </div>
                        <div className="postagem-barra-acoes-conteudo-left-comentario" onClick={()=>{setIsCommentOpen(!isCommentOpen)}}>
                            <img src={COMENTAR} /> <span>ver comentarios</span>
                        </div>
                        
                    </div>
                    <div className="postagem-barra-acoes-conteudo-right" onClick={()=>{setIsReported(!isReported)}}>
                        {isReported ? (<img src={REPORTACTIVE}/>) : (<img src={REPORTNEUTRO}/>) }
                    </div>
                </div>

            </div>
        </div>
        
        </>
    )
}

export default Postagem;