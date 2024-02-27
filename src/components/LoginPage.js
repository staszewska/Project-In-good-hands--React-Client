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
      </div>
    </>
  );
};

export default LoginPage;
