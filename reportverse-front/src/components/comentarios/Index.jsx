import {React,useState} from "react";
import './Style.scss';

const Comentarios = ({isOpen}) => {
    const [isCommentOpen,setIsCommentOpen] = useState(isOpen);

    return(
        <>
        {console.log("Entrei")}
        {
            isCommentOpen ?
            (
            <div className="comentarios">
            <span onClick={()=>{setIsCommentOpen(false)}}>voltar</span>
            </div>
            ) : 
            null
        }
        
        </>
    )
}

export default Comentarios;