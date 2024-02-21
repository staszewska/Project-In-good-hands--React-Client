import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";
import { Link } from "react-router-dom";

const FourSteps = () => {
  return (
    <>
      <div className="FourStepsContainer__Header">
        <p>Wystarczą 4 proste kroki</p>
        <Decoration />
      </div>

      <div className="FourStepsContainer__Content">
        <div className="FourStepsConatiner__Column">
          <img
            src={Icon1}
            alt="Icon-1"
            style={{ width: "30px", height: "30px" }}
          />
          <p>Wybierz rzeczy</p>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>

        <div className="FourStepsConatiner__Column">
          <img
            src={Icon2}
            alt="Icon-2"
            style={{ width: "30px", height: "30px" }}
          />
          <p>Spakuj je</p>
          <p>skorzystaj z worków na śmieci</p>
        </div>

        <div className="FourStepsConatiner__Column">
          <img
            src={Icon3}
            alt="Icon-3"
            style={{ width: "30px", height: "30px" }}
          />
          <p>Zdecyduj komu chcesz pomóc</p>
          <p>wybierz zaufane miejsce</p>
        </div>

        <div className="FourStepsConatiner__Column">
          <img
            src={Icon4}
            alt="Icon-4"
            style={{ width: "30px", height: "30px" }}
          />
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
