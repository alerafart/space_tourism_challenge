// == Import component
import {NavLink} from "react-router-dom";
// import logo from '../../assets/shared/logo.svg';
// == Import style
// import './navbarDesktop.scss';
import './header.scss';
// import {useState} from 'react';
// import data from '../../data.js';

function NavbarDesktop() {
  // console.log(data.crew);
  // console.log(dt);

  return (
    <>
    <nav className="header__nav">
        <ul className="header__nav__menu">
            <li className="header__nav__menu--li">
                <NavLink to="/home"
                    className={({ isActive }) => isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
                >
                    <pre>
                        <span className="span">00 </span> Home
                    </pre>
                </NavLink>
            </li>
            <li className="header__nav__menu--li">
                <NavLink to="/destination"
                    className={({ isActive }) => isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
                >
                    <pre>
                        <span className="span">01 </span>Destination
                    </pre>
                </NavLink>
            </li>
            <li className="header__nav__menu--li">
                <NavLink to="/crew"
                    className={({ isActive }) => isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
                >
                    <pre>
                        <span className="span">02 </span> Crew
                    </pre>
                </NavLink>
            </li>
            <li className="header__nav__menu--li">
                <NavLink to="/technology"
                    className={({ isActive }) => isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
                >
                    <pre>
                        <span className="span">03 </span> Technology
                    </pre>
                </NavLink>
            </li>
        </ul>
    </nav>
    </>
    
    
  );
}

export default NavbarDesktop;