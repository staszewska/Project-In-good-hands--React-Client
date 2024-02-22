import NavBar from "./NavBar";
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import { Element } from "react-scroll";
import AboutUs from "./AboutUs";
import Help from "./Help";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <NavBar />

      <Header />

      <ThreeColumns />

      <Element name="o-co-chodzi">
        <FourSteps />
      </Element>

      <Element name="us">
        <AboutUs />
      </Element>

      <Help />

      <Footer />
    </div>
  );
};

export default Home;
