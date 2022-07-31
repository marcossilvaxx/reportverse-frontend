import React from "react";
import "./Style.scss";
import VOLTAR from "../../assets/voltar.png";
import LOCATIONICON from "../../assets/location-icon.png";

const DetalhesLocalizacao = (eixoX, eixoY, callback,nomePostagem,horarioPostagem,texto ) => {

    return(
        <>
        <div className="detalhesLocalizacao">
            <div className="detalhesLocalizacao-voltar"  onClick={()=>{callback(false)}}>
                <img src={VOLTAR} alt="voltar"/>
                <span>Localização</span>
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

        </div>
        </>
    )
}

export default DetalhesLocalizacao;