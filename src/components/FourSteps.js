import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import { ReactComponent as Icon1 } from "../assets/Icon-1.svg";
import { ReactComponent as Icon2 } from "../assets/Icon-2.svg";
import { ReactComponent as Icon3 } from "../assets/Icon-3.svg";
import { ReactComponent as Icon4 } from "../assets/Icon-4.svg";
import { Link } from "react-router-dom";

const FourSteps = () => {
  // console.log(">>>", Icon1);

  return (
    <>
      <div className="FourStepsContainer__Header">
        <p>Wystarczą 4 proste kroki</p>
        <Decoration />
      </div>

      <div className="FourStepsContainer__Content">
        <div className="FourStepsConatiner__Column">
          <Icon1 style={{ width: "100px", height: "100px", color: "black" }} />
          <p>Wybierz rzeczy</p>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="FourStepsConatiner__Column">
          <Icon2 style={{ width: "100px", height: "100px", color: "black" }} />
          <p>Spakuj je</p>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="FourStepsConatiner__Column">
          <Icon3 style={{ width: "100px", height: "100px", color: "black" }} />
          <p>Zdecyduj komu chcesz pomóc</p>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="FourStepsConatiner__Column">
          <Icon4 />
          <p>Zamów kuriera</p>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>

      <div className="FourStepsContainer__Button">
        <Link to="login" className="MainButton">
          ODDAJ RZECZY
        </Link>
      </div>
    </>
  );
};

export default FourSteps;
