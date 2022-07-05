import React from "react";
import './Style.scss';
import MenuMobile from "../../components/menuMobile/Index";
import Postagem from "../../components/postagem/Index";


const Home = () => {


    return(
        <>
        <div>
        <Postagem/>
          <MenuMobile selectIcon="home" />
        </div>
        </>
    )
}

export default Home;