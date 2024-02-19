import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import heroImage from "../assets/Home-Hero-Image.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="RightHeader">
        <img src={heroImage} alt="Hero" style={{ width: "700px" }}></img>
      </div>
      <div className="LeftHeader">
        <p>Zacznij pomagać!</p>
        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
        <Decoration />
        <div className="Header__Links">
          <Link to="login" className="MainButton">
            ODDAJ RZECZY
          </Link>
          <Link to="login" className="MainButton">
            ZORGANIZUJ ZBIÓRKĘ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
