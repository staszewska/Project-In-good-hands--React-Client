import NavBar from "./NavBar";
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import { Element } from "react-scroll";
import AboutUs from "./AboutUs";
import Help from "./Help";
import Contact from "./Contact";
import { useEffect, useState } from "react";

const Home = ({ userData }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userData) {
      return;
    }

    console.log("[Home] UserData detected:", userData);
    setUser(userData.user);
  }, [userData]);

  function handleUserLogOut() {
    setUser(null);
  }

  return (
    <div>
      <NavBar user={user} onUserLogOut={() => handleUserLogOut()} />

      <Header />

      <ThreeColumns />

      <Element name="o-co-chodzi">
        <FourSteps />
      </Element>

      <Element name="us">
        <AboutUs />
      </Element>

      <Element name="help">
        <Help />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;
