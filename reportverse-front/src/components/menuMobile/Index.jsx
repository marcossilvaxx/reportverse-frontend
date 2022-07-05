import {React, useState, useEffect} from "react";
import './Style.scss';
import POST from "../../assets/postar.png";
import HOME from "../../assets/home.png";
import MAPA from "../../assets/localizacao.png";
import PERFIL from "../../assets/profile.png";

import POSTSELECT from "../../assets/postar-amarelo.png";
import HOMESELECT from "../../assets/home-amarelo.png";
import MAPASELECT from "../../assets/localizacao-amarelo.png";
import PERFILSELECT from "../../assets/profile-amarelo.png";



const MenuMobile = ({selectIcon}) => {
    
   
    const [selectHome, setSelectHome] = useState({
        postar: false,
        home: false,
        mapa: false,
        perfil: false
      });
    
      const {postar, home ,mapa, perfil} = selectHome;

    useEffect(() => {
        setIcon();
    },[]);   

    const setIcon = () => {
        if(selectIcon === 'postar'){
            setSelectHome({postar: true, home: false, mapa: false, perfil: false}) 
        }
        if(selectIcon === 'home'){
            setSelectHome({postar: false, home: true, mapa: false, perfil: false}) 
        }
        if(selectIcon === 'mapa'){
            setSelectHome({postar: false, home: false, mapa: true, perfil: false}) 
        }
        if(selectIcon === 'perfil'){
            setSelectHome({postar: false, home: false, mapa: false, perfil: true}) 
        }
    }

    return(
        <>
        <div className="menu-mobile">
           <div className="menu-mobile-container">

                <a href="./postar">
                    {postar ? (<img src={POSTSELECT}/>) : ( <img src={POST}/>)}
                </a>

                <a href="./mapa">    
                    {mapa ? ( <img src={MAPASELECT}/>) : (<img src={MAPA}/>)}
                </a>

                <a href="./home">
                    {home ? ( <img src={HOMESELECT}/>) : (<img src={HOME}/>)}
                </a>

                <a href="./perfil">
                    {perfil ? ( <img src={PERFILSELECT}/>) : (<img src={PERFIL}/>)}
                </a>
            </div> 
        </div>
        </>
    )
}

export default MenuMobile;