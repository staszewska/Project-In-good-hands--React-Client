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
        <p>Just 4 simple steps</p>
        <Decoration />
      </div>

      <div className="FourStepsContainer__Content">
        <div className="FourStepsConatiner__Column">
          <img
            src={Icon1}
            alt="Icon-1"
            style={{ width: "30px", height: "30px" }}
          />
          <p>Choose items</p>
          <p>clothes, toys, equipment, and more</p>
        </div>

        <div className="FourStepsConatiner__Column">
          <img
            src={Icon2}
            alt="Icon-2"
            style={{ width: "30px", height: "30px" }}
          />
          <p>Pack them</p>
          <p>use trash bags</p>
        </div>

        <div className="FourStepsConatiner__Column">
          <img
            src={Icon3}
            alt="Icon-3"
            style={{ width: "30px", height: "30px" }}
          />
          <p>Decide who you want to help</p>
          <p>choose a trusted place</p>
        </div>

        <div className="FourStepsConatiner__Column">
          <img
            src={Icon4}
            alt="Icon-4"
            style={{ width: "30px", height: "30px" }}
          />
          <p>Order a courier</p>
          <p>the courier will arrive at a convenient time</p>
        </div>
      </div>

      <div className="FourStepsContainer__Button">
        <Link to="login" className="MainButton">
          DONATE ITEMS
        </Link>
      </div>
    </>
  );
};

export default FourSteps;
