// == Import component
import { NavLink} from "react-router-dom";
// == Import style
import './header.scss';

function Header() {
  
  return (
    <header className="header">
        <nav className="header__nav">
          <ul className="header__nav__ul">
            <li className="header__nav__ul" >
              <NavLink to="/">
                00 Home
              </NavLink>
            </li>
            <li 
            // className="header__nav__ul"
            className= {({ isActive }) =>
            isActive ? 'header__nav__menu--item active' : 'header__nav__menu--item'
          }
            >
              <NavLink to="/destination">
                01 Destination
              </NavLink>
            </li>
            <li className="header__nav__ul">
              <NavLink to="/crew">
                02 Crew
              </NavLink>
            </li>
            <li className="header__nav__ul">
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