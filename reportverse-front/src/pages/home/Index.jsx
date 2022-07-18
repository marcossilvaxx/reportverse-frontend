import React from "react";
import './Style.scss';
import MenuMobile from "../../components/menuMobile/Index";
import Postagem from "../../components/postagem/Index";
import LOGOPRINCIPAL from "../../assets/REPORTVERSE-LOGO.png"


const Home = () => {

 

    return(
        <>
        <div className="home">
          <div className="home-header">
            <div className="home-header-limitador">
              <img src={LOGOPRINCIPAL} alt="logo do reportverse"/>
            </div>
          </div>
        
          <Postagem/>
          <Postagem id="2" />
            
          <MenuMobile selectIcon="home" />
        </div>
        </>
    )
}

export default Home;