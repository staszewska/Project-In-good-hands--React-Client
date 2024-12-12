import { Link } from "react-router-dom";
import { Link as ReactScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

const NavBar = ({ onUserLogOut }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    } else {
      setUser(null);
    }
  }, []); // This runs when the component mounts

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="login">
        {!user ? (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span>Hello, {user.Email}</span>

            <Link onClick={handleLogOut}>Logout</Link>
          </>
        )}
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
