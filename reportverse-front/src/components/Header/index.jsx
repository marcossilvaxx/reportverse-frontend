import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles.scss';
import reportverseLogo from '../../assets/reportverse-logo.svg';
import postarIcon from '../../assets/postar.svg';
import postarAmareloIcon from '../../assets/postar-amarelo.svg';
import localizacaoIcon from '../../assets/location.svg';
import localizacaoAmareloIcon from '../../assets/location-amarelo.svg';
import homeIcon from '../../assets/home.svg';
import homeAmareloIcon from '../../assets/home-amarelo.svg';
import cadeadoIcon from '../../assets/icon-cadeado.svg';
import cadeadoAmareloIcon from '../../assets/icon-cadeado-amarelo.svg';
import logoutIcon from '../../assets/logout.svg';
import { getUserInfo } from '../../axios/response/response';

function Header({ history }) {
  const pathname = history.location.pathname;

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    (async () => {
      const userInfo = await getUserInfo();

      setIsAdmin(userInfo.userRole === "ADMINISTRADOR");
    })()
  }, []);

  return (
    <div className="header-container">
      <Link to="/home"><img src={reportverseLogo} alt="Reportverse Logo" /></Link>
      <div className="navbar-menu">
        <Link to="/postar">
          <img src={pathname === "/postar" ? postarAmareloIcon : postarIcon} alt="Postar menu logo" />
        </Link>
        <Link to="/mapa">
          <img src={pathname === "/mapa" ? localizacaoAmareloIcon : localizacaoIcon} alt="Localização menu logo" />
        </Link>
        <Link to="/home">
          <img src={pathname === "/home" ? homeAmareloIcon : homeIcon} alt="Home menu logo" />
        </Link>
        {isAdmin && (
          <Link to="/admin">
            <img src={pathname === "/admin" ? cadeadoAmareloIcon : cadeadoIcon} alt="Admin menu logo" />
          </Link>
        )}
        <Link onClick={() => {
          localStorage.removeItem("reportverse:user_token");

          history.push("/");
        }}>
          <img src={logoutIcon} alt="Logout menu logo" />
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Header);