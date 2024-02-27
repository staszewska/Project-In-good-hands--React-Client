import NavBar from "./NavBar";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <div className="LoginPageContainer">
        <div className="LoginPage__Header">
          Zaloguj się
          <Decoration />
        </div>
        <form className="LoginPage__Form">
          <label for="email">Email</label>
          <input id="email" type="email" />
          <label for="password">Hasło</label>
          <input id="password" type="password" />
        </form>

        <div className="LoginPage__Buttons">
          <Link to="register">Załóż konto</Link>
          <a src="#">Zaloguj</a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
