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
import { denunciarPostagem } from "../../axios/response/response";
import DetalhesLocalizacao from "../DetalhesLocalizacao/Index";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import LOCATIONICONWHITE from "../../assets/LOCALIZACAOWHITE.png";




const Postagem = ({horario, descricao, latitude,longitude,nome,comentarios, imagem, idPostagem}) => {

    const [isLiked,setIsLiked] = useState(false);
    const [isReported,setIsReported] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const [isCommentOpen,setIsCommentOpen] = useState(false);
    const [baseImage, setBaseImage] = useState("");

    async function reportar(){
        setIsReported(!isReported);
        
        if(isReported==false){
            await denunciarPostagem(idPostagem);
        }
    }

    function Collapsible(texto,tamanho){
        let textoReduzido = texto.split(" ", tamanho);
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

    function formataHorario(horario){
        const novoHorario = `${horario[8]+horario[9]} - ${horario[5]+horario[6]} - ${horario[0]+horario[1]+horario[2]+horario[3]}`
        return novoHorario;
    }

    
    const convertBase64 = (e) => {
        if(e.length>0){
            const result = `data:image/jpeg;base64, ${e[0].code}`
            setBaseImage(result);
        }
      };

    useEffect(()=>{
        convertBase64(imagem);
    },[]);

 
    const [width] = useWindowSize();

    const barraDeAcoes = () => {

        return(
            <div className="postagem-barra-acoes">
                    <div className="postagem-barra-acoes-conteudo">
                        <div className="postagem-barra-acoes-conteudo-left">
                            <div onClick={()=>{setIsLiked(!isLiked)}}>
                                {isLiked ? (<img src={LIKEACTIVE}/>) : (<img src={LIKENEUTRO}/>) }
                            </div>
                            <div className="postagem-barra-acoes-conteudo-left-comentario">
                            <Link to={`/comentarios/${idPostagem}`}><img src={COMENTAR} /></Link> <span>ver comentarios</span>
                            </div>      
                        </div>
                        <div className="postagem-barra-acoes-conteudo-right" onClick={()=>{reportar()}}>
                            {isReported ? (<img src={REPORTACTIVE}/>) : (<img src={REPORTNEUTRO}/>) }
                        </div>
                    </div>
            </div>
            
        )
    }

    return(
        <>
            <div className="postagem">
                {width <= 768 && (
                    <>
                            
                        <div className="postagem-header">
                            <div className="postagem-header-left">
                                <h3>{nome}</h3>
                                <p>{formataHorario(horario)}</p>
                            </div>
                            <div className="postagem-header-right">
                                <Link to={`/localizacao/${idPostagem}`}><img src={LOCATIONICON} alt={"localizacao"}/></Link>
                            </div>
                        </div>

                        <div className="postagem-texto">
                            {Collapsible(descricao,15)}
                        </div>
                        <div className="postagem-foto">
                                <img src={baseImage} />
                        </div>
                        {barraDeAcoes()}
                    </>
                )}

                

                
                {width > 768 && (
                    <>
                        <div className="postagem">

                            
                            <div className="postagem-header">
                                <div className="postagem-header-left">
                                    <h3 style={{"color":"#fff"}}>{nome}</h3>
                                    <p style={{"color":"#fff"}}>{formataHorario(horario)}</p>
                                </div>
                                <div className="postagem-header-right">
                                    <Link to={`/localizacao/${idPostagem}`}><img src={LOCATIONICONWHITE} alt={"localizacao"}/></Link>
                                </div>
                            </div>

                            <div className="postagem-foto">
                                <img src={baseImage} />
                            </div>
                            {barraDeAcoes()}
                            <div className="postagem-texto">
                                {Collapsible(descricao,50)}
                            </div>
                        </div>
                    </>
                )}

           
                


            </div>
    </>
        
    )

    

}

export default Postagem;