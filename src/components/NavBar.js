import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="login">
        <Link to="login">Zaloguj sie</Link>
        <Link to="register">Zarejestruj sie</Link>
      </div>
      <div className="links"></div>
      <Link to="/">Start</Link>
      <Link to="about">O co chodzi?</Link>
      <Link to="us">O nas</Link>
      <Link to="foundation">Fundacja i organizacja</Link>
      <Link to="contact">Kontakt</Link>
    </nav>
  );
};

export default NavBar;
