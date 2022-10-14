// == Import component
import { NavLink} from "react-router-dom";
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
        <img src={logo} alt='logo'/>
        </div>
        
        <div className="header__left__divider"></div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__menu">
          <li className="header__nav__menu--item" >
            <NavLink to="/ "
            // className= {({ isActive }) =>
            // isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            >
              00 Home
            </NavLink>
          </li>
          <li 
          className="header__nav__menu--item"
            // className= {({ isActive }) =>
            // isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
          >
            <NavLink 
            // className= {({ isActive }) =>
            // isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            to="/destination">
              01 Destination
            </NavLink>
          </li>
          <li className="header__nav__menu--item"
          // className= {({ isActive }) =>
          //   isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            >
            <NavLink to="/crew">
              02 Crew
            </NavLink>
          </li>
          <li className="header__nav__menu--item">
            <NavLink to="/technology">
              03 Technology
            </NavLink>
          </li>
        </ul>
      </nav>

        
        
          
        
    </header>
  );
}

export default Header;