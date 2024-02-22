import { ReactComponent as Decoration } from "../assets/Decoration.svg";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="BackgroundOverlay"></div>
        <div className="Footer__Form">
          <p>Skontaktuj się z nami</p>
          <Decoration />
          <form>
            <label>Wpisz swoje imię</label>
            <input type="text"></input>
            <label>Wpisz swój e-mail</label>
            <input type="email"></input>
            <label>Wpisz swoją wiadomość</label>
            <textarea></textarea>

            <label>Wyślij wiadomość</label>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
