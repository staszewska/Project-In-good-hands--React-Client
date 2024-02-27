import NavBar from "./NavBar";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

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
          <label>Email</label>
          <input type="email" />
          <label>Hasło</label>
          <input type="password"></input>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
