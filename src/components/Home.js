import NavBar from "./NavBar";
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div>
      <NavBar />

      <Header />

      <ThreeColumns />

      <Element name="o-co-chodzi">
        <FourSteps />
      </Element>
    </div>
  );
};

export default Home;
