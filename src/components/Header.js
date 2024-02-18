import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import heroImage from "../assets/Home-Hero-Image.jpg";

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
        <button>ODDAJ RZECZY</button>
        <button>ZORGANIZUJ ZBIÓRKĘ</button>
      </div>
    </div>
  );
};

export default Header;
