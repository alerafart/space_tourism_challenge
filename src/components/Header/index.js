// == Import component
import {NavLink} from "react-router-dom";
import logo from '../../assets/shared/logo.svg';
// == Import style
import './header.scss';

import {useState} from 'react';
// import data from '../../data.js';

function Header() {
  // console.log(data.crew);
  // console.log(dt);

  const [mobileNavVisible, setMobileNavVisible] = useState(true);
  const [burgerMenu, setBurgerMenu] = useState(false);

  function handleCloseMobileNav() {
    setMobileNavVisible(false);
    setBurgerMenu(true);
  }
  function openBurgerMenu() {
    setMobileNavVisible(true);
    setBurgerMenu(false);
  }
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

      <nav className="header__nav">
        {
          mobileNavVisible && 
          <button 
          className="header__nav--close"
          onClick={handleCloseMobileNav}
          >X</button>
        }
        {
          burgerMenu && 
          <button
          className="header__nav--close"
          onClick={openBurgerMenu}
          >+</button>
        }
        
        <ul className="header__nav__menu">
          <li
          className= "header__nav__menu--li"
          >
            <NavLink to="/home"
            className= {({ isActive }) =>
            isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            >
              <pre>
                <span className="span">00 </span> Home
              </pre>
            </NavLink>
          </li>
          <li className= "header__nav__menu--li">
            <NavLink to="/destination"
              className= {({ isActive }) =>
              isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
              >
              <pre>
                 <span className="span">01 </span> Destination
              </pre>
            </NavLink>
          </li>
          <li className= "header__nav__menu--li">
            <NavLink to="/crew"
              className= {({ isActive }) =>
              isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
              >
              <pre>
                <span className="span">02 </span> Crew
              </pre>
            </NavLink>
          </li>
          <li 
            className= "header__nav__menu--li">
            <NavLink to="/technology"
              className= {({ isActive }) =>
              isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
              >
              <pre>
                <span className="span">03 </span> Technology
              </pre>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;