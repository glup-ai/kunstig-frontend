import { Link } from "react-router-dom";
import './header.scss'

const Header = () => (
    <nav className="headerContainer">
        <h1 className="headerTitle">Kunstig</h1>
        <Link className="headerLink" to="/modeller">Modeller</Link>
        <Link className="headerLink" to="/om">Om oss</Link>

    </nav>
);

export default Header;