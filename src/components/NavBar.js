import { Link } from "react-router-dom";
import { Link as ReactScrollLink } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="login">
        <Link to="login">Zaloguj sie</Link>
        <Link to="register">Zarejestruj sie</Link>
      </div>
      <div className="links">
        <Link to="/">Start</Link>
        <ReactScrollLink to="o-co-chodzi" smooth={true} duration={500}>
          O co chodzi?
        </ReactScrollLink>
        <Link to="us">O nas</Link>
        <Link to="foundation">Fundacja i organizacja</Link>
        <Link to="contact">Kontakt</Link>
      </div>
    </nav>
  );
};

export default NavBar;
