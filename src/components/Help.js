import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import React, { useState } from "react";
import HelpForm from "./HelpForm";

const Help = () => {
  const obj1 = {
    description:
      "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.",
    name1: 'Fundacja "Dbam o zdrowie"',
    para: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
    things: "ubrania, jedzenie, meble, sprzęt AGD, zabawki",
    name2: 'Fundacja "Dla dzieci"',
    para2: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    things2: "ubrania, meble, zabawki",
    name3: 'Fundacja "Bez domu"',
    para3:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    things3: "ubrania, jedzenie, ciepłe koce",
  };

  const obj2 = {
    description:
      "Officia excepteur ut velit velit excepteur amet officia occaecat veniam magna eu ad laborum. Enim deserunt ad aliqua occaecat in cupidatat pariatur Lorem consectetur nisi esse do. Ad est aliqua anim eiusmod dolore ipsum veniam. Officia proident amet id non elit. Consequat id quis cillum eiusmod laboris est mollit enim duis cillum dolor labore nostrud anim. Consectetur mollit ipsum aliquip fugiat cupidatat culpa.",
    name1: 'Organizacja "Lorem Ipsum1"',
    para: "Aliquip occaecat do eu qui officia esse magna laboris incididunt. Quis reprehenderit fugiat reprehenderit cillum do pariatur ex. Incididunt adipisicing aute dolore adipisicing ipsum excepteur velit cupidatat culpa. Magna cupidatat sint qui reprehenderit veniam mollit exercitation magna elit veniam do labore.",
    things: "Sit, officia, pariatur",
    name2: 'Organizacja "Lorem Ipsum2"',
    para2: "Esse ullamco ipsum officia esse.",
    things2: "Sit, adipisicing, mollit",
    name3: 'Organizacja "Lorem Ipsum3"',
    para3: "Proident id adipisicing eu qui ut fugiat qui labore.",
    things3: "Fugiat, esse, cillum",
  };

  const obj3 = {
    description:
      "Mollit et quis enim laboris do elit. Minim fugiat minim esse laboris cupidatat do. Veniam cillum proident magna incididunt voluptate ipsum ad pariatur. Voluptate sunt id ex amet nostrud aliqua ex. Cillum tempor irure fugiat laboris officia adipisicing adipisicing enim ullamco deserunt dolor. Nulla amet reprehenderit voluptate officia incididunt cillum amet sit aute eiusmod proident elit consectetur.",
    name1: 'Zbiórka "Lorem Ipsum1"',
    para: "Pariatur exercitation non proident laboris mollit labore.",
    things: "Fugiat, esse, cillum",
    name2: 'Zbiórka "Lorem Ipsum2"',
    para2:
      "Quis commodo elit consequat labore deserunt nostrud tempor nisi voluptate consequat do.",
    things2: "Sit, officia, pariatur",
    name3: 'Zbiórka "Lorem Ipsum3"',
    para3: "Occaecat laboris proident duis dolor magna culpa officia in ea.",
    things3: "Sit, officia, pariatur",
  };

  const [selectedObj, setSelectedObj] = useState(obj1);

  const handleButtonClick = (selected) => {
    setSelectedObj(selected);
  };

  return (
    <div className="HelpForm">
      <h1>Komu pomagamy?</h1>
      <Decoration />
      <div className="HelpForm__Buttons">
        <button
          className="HelpForm__Button"
          onClick={() => handleButtonClick(obj1)}
        >
          Fundacjom
        </button>
        <button
          className="HelpForm__Button"
          onClick={() => handleButtonClick(obj2)}
        >
          Organizacjom pozarządowym
        </button>
        <button
          className="HelpForm__Button"
          onClick={() => handleButtonClick(obj3)}
        >
          Lokalnym zbiórkom
        </button>
      </div>
      <div>{selectedObj && <HelpForm data={selectedObj} />}</div>
    </div>
  );
};

export default Help;
