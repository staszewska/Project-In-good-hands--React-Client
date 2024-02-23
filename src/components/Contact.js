import { ReactComponent as Decoration } from "../assets/Decoration.svg";

const Contact = () => {
  return (
    <>
      <div className="Contact">
        <div className="BackgroundOverlay"></div>
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
      </div>
    </>
  );
};

export default Contact;
