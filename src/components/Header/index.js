// == Import component
import { Link , NavLink} from "react-router-dom";
// == Import style
import './header.scss';
// == Component
function Header() {
  
  return (
    <header className="header">
        header component
        <NavLink>
          <Link to="/technology">Technology</Link>
        </NavLink>
    </header>
  );
}

export default Header;