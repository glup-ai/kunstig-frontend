import { Link } from "react-router-dom";
import './header.scss'

const Header = () => (
    <nav className="headerContainer">
        <Link className="headerTitle" to="/">Kunstig</Link>
        <Link className="headerLink" to="/om">Om oss</Link>
        <Link className="headerLink" to="/galleri">Galleri</Link>
        <Link className="headerLink" to="/generer">Lag kunst</Link>

    </nav>
);

export default Header;