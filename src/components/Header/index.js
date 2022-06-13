import {Link} from "react-router-dom";
import './header.scss'

export const Header = () => (
    <nav className="headerContainer">
        <Link className="headerTitle" to="/">Kunstig</Link>
        <div className="headerLinkContainer">
            <Link className="headerLink" to="/galleri">Galleri</Link>
            <Link className="headerLink" to="/generer">Lag kunst</Link>
            <Link className="headerLink" to="/skriv-kunst">Skriv kunst</Link>
            <Link className="headerLink" to="/om">Om prosjektet</Link>
        </div>
    </nav>
);
