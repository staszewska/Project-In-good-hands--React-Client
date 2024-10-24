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
        <p>Start helping!</p>
        <p>Donate unwanted items to trusted hands</p>
        <Decoration />
        <div className="Header__Links">
          <Link to="login" className="MainButton">
            DONATE ITEMS
          </Link>
          <Link to="login" className="MainButton">
            ORGANIZE A COLLECTION
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
