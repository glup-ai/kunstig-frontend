import { Link } from "react-router-dom";
import './header.scss'

const Header = () => (
    <nav className="headerContainer">
        <h1 className="headerTitle">Kunstig</h1>
        <Link className="headerLink" to="/models">Modeller</Link>
    </nav>
);

export default Header;