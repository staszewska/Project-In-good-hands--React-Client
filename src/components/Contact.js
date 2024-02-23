import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Footer from "./Footer";
import background from "../assets/Background-Contact-Form.jpg";

const Contact = () => {
  return (
    <>
      <div className="Contact">
        <img
          src={background}
          className="Contact__Background"
          alt="background"
        />
        <div className="Contact__Form">
          <p>Skontaktuj się z nami</p>
          <Decoration />
          <form className="Contact__FormContent">
            <div className="Contact__FormInput">
              <div className="FormInput__Row">
                <label>Wpisz swoje imię</label>
                <input type="text" value="Krzysztof"></input>{" "}
              </div>
              <div className="FormInput__Row">
                <label>Wpisz swój e-mail</label>
                <input type="email" value="abc@xyz.pl"></input>
              </div>
            </div>
            <div className="Contact__FormTextarea">
              <label>Wpisz swoją wiadomość</label>
              <textarea></textarea>
            </div>
            <div className="Contact__SendButtoContainer">
              <a className="Contact__SendButton" href="/">
                WYŚlIJ
              </a>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
