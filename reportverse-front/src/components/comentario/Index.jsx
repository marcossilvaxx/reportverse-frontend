import {React} from "react";
import './Style.scss';

const Comentario = ({nome, dataPostagem, texto}) => {
   

    return(
        <>
        <div className="comentario-center">
        <div className="comentario">
            <div className="comentario-nome">
                <h3>{nome}</h3>
                <p>{dataPostagem}</p>
            </div>
            <div className="comentario-texto">
                {texto}
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Comentario;