// import { ReactComponent as Decoration } from "src/assets/Decoration.svg";
import backgroundForm from "../../assets/Background-Form.jpg";

import NavBar from "../NavBar";

const FormFirstPage = ({ user, handleUserLogOut }) => {
  return (
    <>
      <NavBar user={user} onUserLogOut={() => handleUserLogOut()} />

      <div className="DonateInfo">
        <p>Important!</p>
        <p>Fill in the details about the items you want to donate.</p>
      </div>
      <div>
        <img src={backgroundForm} alt="Hero" style={{ width: "100%" }}></img>
      </div>

      <p>Select what you want to donate.</p>
    </>
  );
};

export default FormFirstPage;
