import {React} from "react";
import './Style.scss';

const Comentario = ({nome, dataPostagem, texto,key}) => {
   

    return(
        <>
        <div className="comentario-center" key={key}>
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