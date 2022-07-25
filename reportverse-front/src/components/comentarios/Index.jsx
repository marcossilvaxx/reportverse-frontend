import React from "react"
import "./Style.scss"
import VOLTAR from "../../assets/voltar.png";
import Comentario from "../comentario/Index";
import LOCATIONICON from "../../assets/location-icon.png";


const Comentarios = ({texto,callback}) => {

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
                        <h3>Fulano123</h3>
                        <p>09:26 - 07/06/2022</p>
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
                    <Comentario nome="Fulano123" dataPostagem={"09:27 - 07/06/2022"}  texto="É imoral isso, também percebo!" />
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