import React from "react";
import './Style.scss';
import LOCATIONICON from "../../assets/location-icon.png"
import { useState } from "react";


const Postagem = () => {

    const [isOpen,setIsOpen] = useState(false);

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
        </div>
        
        </>
    )
}

export default Postagem;