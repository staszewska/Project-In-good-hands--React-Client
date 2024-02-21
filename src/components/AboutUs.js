import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import people from "../assets/People.jpg";
import signature from "../assets/Signature.svg";

const AboutUs = () => {
  return (
    <>
      <div className="AboutUsContainer">
        <div className="AboutUs">
          <p>O nas</p>
          <Decoration />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi
            neque, pretium placerat nibh a, volutpat condimentum ligula. Donec
            tempus quis est id varius. Quisque bibendum ultrices ullamcorper.
            Cras mollis, ligula a tincidunt consequat, magna arcu sollicitudin
            lorem, non molestie sapien tortor in sapien.
          </p>
          <img src={signature} />
        </div>
        <div className="AboutUsImgContainer">
          <img src={people} style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
