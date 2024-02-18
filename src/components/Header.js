import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import heroImage from "../assets/Home-Hero-Image.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="right-header">
        <img src={heroImage} alt="Hero" style={{ width: "700px" }}></img>
      </div>
      <div className="left-header">
        <p>Zacznij pomagać!</p>
        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
        <Decoration />
        <Link to="donate">ODDAJ RZECZY</Link>
        <Link to="organize">ZORGANIZUJ ZBIÓRKĘ</Link>
      </div>
    </div>
  );
};

export default Header;
