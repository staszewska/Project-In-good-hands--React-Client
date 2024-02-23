import { ReactComponent as Decoration } from "../assets/Decoration.svg";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="BackgroundOverlay"></div>
        <div className="Footer__Form">
          <p>Skontaktuj się z nami</p>
          <Decoration />
          <form className="Footer__FormContent">
            <div className="Footer__FormInput">
              <div className="FormInput__Row">
                <label>Wpisz swoje imię</label>
                <input type="text" value="Krzysztof"></input>{" "}
              </div>
              <div className="FormInput__Row">
                <label>Wpisz swój e-mail</label>
                <input type="email" value="abc@xyz.pl"></input>
              </div>
            </div>
            <div className="Footer__FormTextarea">
              <label>Wpisz swoją wiadomość</label>
              <textarea></textarea>
            </div>
            <div className="Footer__SendButtoContainer">
              <a className="Footer__SendButton" href="/">
                WYŚlIJ
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
