import {React, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import './Style.scss';
import POST from "../../assets/postar.png";
import HOME from "../../assets/home.png";
import MAPA from "../../assets/localizacao.png";
import PERFIL from "../../assets/profile.png";

import POSTSELECT from "../../assets/postar-amarelo.png";
import HOMESELECT from "../../assets/home-amarelo.png";
import MAPASELECT from "../../assets/localizacao-amarelo.png";
import PERFILSELECT from "../../assets/profile-amarelo.png";
import logoutIcon from '../../assets/logout.svg';
import { Link } from "react-router-dom";



const MenuMobile = ({selectIcon}) => {
    
   
    const [selectHome, setSelectHome] = useState({
        postar: false,
        home: false,
        mapa: false,
        perfil: false
    });

    const history = useHistory();
    
    const {postar, home ,mapa} = selectHome;

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
    }

    return(
        <>
        <div className="menu-mobile">
           <div className="menu-mobile-container">

                <Link to="/postar">
                    {postar ? (<img src={POSTSELECT}/>) : ( <img src={POST}/>)}
                </Link>

                <Link to="/mapa">    
                    {mapa ? ( <img src={MAPASELECT}/>) : (<img src={MAPA}/>)}
                </Link>

                <Link to="/home">
                    {home ? ( <img src={HOMESELECT}/>) : (<img src={HOME}/>)}
                </Link>

                <Link onClick={() => {
                    localStorage.removeItem("reportverse:user_token");

                    history.push("/");
                }}>
                    <img src={logoutIcon} alt="Logout menu logo" />
                </Link>
            </div> 
        </div>
        </>
    )
}

export default MenuMobile;