import React from "react"
import "./Style.scss"
import VOLTAR from "../../assets/voltar.png";
import Comentario from "../comentario/Index";
import LOCATIONICON from "../../assets/location-icon.png";


const Comentarios = ({texto,callback,comentarios, nomePostagem, horarioPostagem,texto}) => {


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
                        <Comentario nome={comentario.nome} dataPostagem={comentario.horario}  texto={horario.texto} key={idx} />
                    )
                })}          
            </div>

            <div className="comentarios-digitar">
                <div className="comentarios-digitar-container">
                    <div className="comentarios-digitar-container-text">
                        <input placeholder="digite algo..."/>
                    </div>
                    <div className="comentarios-digitar-container-action">
                        Comentar
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
    )

}

export default Comentarios;