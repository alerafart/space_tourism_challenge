// == Import component
import {Link} from "react-router-dom";
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
            <Link to="/"
            // className= {({ isActive }) =>
            // isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            >
              00 Home
            </Link>
          </li>
          <li 
          className="header__nav__menu--item"
            // className= {({ isActive }) =>
            // isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
          >
            <Link 
            // className= {({ isActive }) =>
            // isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            to="/destination">
              01 Destination
            </Link>
          </li>
          <li className="header__nav__menu--item"
          // className= {({ isActive }) =>
          //   isActive ? 'header__nav__menu--item header__nav__menu--item active' : 'header__nav__menu--item'}
            >
            <Link to="/crew">
              02 Crew
            </Link>
          </li>
          <li className="header__nav__menu--item">
            <Link to="/technology">
              03 Technology
            </Link>
          </li>
        </ul>
      </nav>

        
        
          
        
    </header>
  );
}

export default Header;