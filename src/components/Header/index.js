// == Import component
import {NavLink} from "react-router-dom";
import logo from '../../assets/shared/logo.svg';
// == Import style
import './header.scss';

// import data from '../../data.js';
// import dt from '../../xdata.json';


function Header() {
  // console.log(data.crew);
  // console.log(dt);
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
        <ul className="header__nav__menu">
          <li
          className= "header__nav__menu--li"
          // className="header__nav__menu--item" 
          >
            <NavLink to="/home"
            className= {({ isActive }) =>
            isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            >
              00 Home
            </NavLink>
          </li>
          <li className= "header__nav__menu--li"
          // className="header__nav__menu--item"
          //   className= {({ isActive }) =>
          //   isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
          // 
          >
            <NavLink to="/destination"
            className= {({ isActive }) =>
            isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            >
              01 Destination
            </NavLink>
          </li>
          <li className= "header__nav__menu--li"
            // className="header__nav__menu--item"
            // className= {({ isActive }) =>
            // isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            >
            <NavLink to="/crew"
              className= {({ isActive }) =>
              isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            >
              02 Crew
            </NavLink>
          </li>
          <li 
            className= "header__nav__menu--li"
          //   className= {({ isActive }) =>
          //   isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
          // 
          >
            <NavLink to="/technology"
            className= {({ isActive }) =>
            isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            >
              03 Technology
            </NavLink>
          </li>
        </ul>
      </nav>

        
        
          
        
    </header>
  );
}

export default Header;