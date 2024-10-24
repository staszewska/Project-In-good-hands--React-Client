import { Link } from "react-router-dom";
import { Link as ReactScrollLink } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="login">
        <Link to="login">Log in</Link>
        <Link to="register">Register</Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <ReactScrollLink to="o-co-chodzi" smooth={true} duration={500}>
          What is it about?
        </ReactScrollLink>
        <ReactScrollLink to="us" smooth={true} duration={500}>
          About Us
        </ReactScrollLink>
        <ReactScrollLink to="help" smooth={true} duration={500}>
          Foundation and Organization
        </ReactScrollLink>
        <ReactScrollLink to="contact" smooth={true} duration={500}>
          Contact
        </ReactScrollLink>
      </div>
    </nav>
  );
};

export default NavBar;
