// == Import component
import {NavLink} from "react-router-dom";
import logo from '../../assets/shared/logo.svg';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
// == Import style
import './header.scss';

import useMediaQuery from "../Hooks/UseMediaQuery";
// import data from '../../data.js';

function Header() {
  // console.log(data.crew);
  // console.log(dt);

  // for conditional display of navbar desktop or mobile
  // hook which listens for the screen with
  const isDesktop = useMediaQuery('(min-width: 650px)');

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__left__logo">
          <NavLink to="/">
            <img src={logo} alt='logo'/>
          </NavLink>
        </div>
        <div className="header__left__divider"></div>
      </div>
      {isDesktop ? <NavbarDesktop /> : <NavbarMobile />}
    </header>
  );
}

export default Header;