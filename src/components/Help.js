import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import React, { useState } from "react";
import HelpForm from "./HelpForm";
import ReactPaginate from "react-paginate";

const Help = () => {
  const obj1 = {
    description:
      "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.",
    items: [
      {
        name: 'Fundacja "Dbam o zdrowie"',
        para: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
        things: "ub}rania, jedzenie, meble, zabawki",
      },
      {
        name: 'Fundacja "Dla dzieci"',
        para: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        things: "ubrania, meble, zabawki",
      },
      {
        name: 'Fundacja "Bez domu"',
        para: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        things: "ubrania, jedzenie, ciepłe koce",
      },
    ],
  };

  const obj2 = {
    description:
      "Officia excepteur ut velit velit excepteur amet officia occaecat veniam magna eu ad laborum. ",
    items: [
      {
        name: 'Organizacja "Lorem Ipsum1"',
        para: "Aliquip occaecat do eu qui officia esse magna laboris incididunt. Quis reprehenderit fugiat reprehenderit cillum do pariatur ex.",
        things: "Sit, officia, pariatur",
      },
      {
        name: 'Organizacja "Lorem Ipsum2"',
        para: "Esse ullamco ipsum officia esse.",
        things: "Sit, adipisicing, mollit",
      },
      {
        name: 'Organizacja "Lorem Ipsum3"',
        para: "Proident id adipisicing eu qui ut fugiat qui labore.",
        things: "Fugiat, esse, cillum",
      },
    ],
  };

  const obj3 = {
    description:
      "Mollit et quis enim laboris do elit. Minim fugiat minim esse laboris cupidatat do. Veniam cillum proident magna incididunt voluptate ipsum ad pariatur. Voluptate sunt id ex amet nostrud aliqua ex. Cillum tempor irure fugiat laboris officia adipisicing adipisicing enim ullamco deserunt dolor. Nulla amet reprehenderit voluptate officia incididunt cillum amet sit aute eiusmod proident elit consectetur.",
    items: [
      {
        name: 'Zbiórka "Lorem Ipsum1"',
        para: "Pariatur exercitation non proident laboris mollit labore.",
        things: "Fugiat, esse, cillum",
      },
      {
        name: 'Zbiórka "Lorem Ipsum2"',
        para: "Quis commodo elit consequat labore deserunt nostrud tempor nisi voluptate consequat do.",
        things: "Sit, officia, pariatur",
      },
      {
        name: 'Zbiórka "Lorem Ipsum3"',
        para: "Occaecat laboris proident duis dolor magna culpa officia in ea.",
        things: "Sit, officia, pariatur",
      },
    ],
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
