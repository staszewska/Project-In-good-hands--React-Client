import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="FooterText">
          <p>Copyright by Coders Lab</p>
        </div>
        <div className="Footer__Icons">
          <a href="https://www.facebook.com" target="_blank">
            <img src={Facebook} alt="facebook-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={Instagram} alt="instagram-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
