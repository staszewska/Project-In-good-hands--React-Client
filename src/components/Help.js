import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import React, { useState } from "react";
import HelpForm from "./HelpForm";

const Help = () => {
  const obj1 = {
    description:
      "In our database, you will find a list of verified foundations we collaborate with.",
    items: [
      {
        id: 1,
        name: '1. Foundation "I Care About Health"',
        para: "Goal and mission: Helping people in difficult life situations",
        things: "clothes, food, furniture, toys",
      },
      {
        id: 2,
        name: '2. Foundation "For Children"',
        para: "Goal and mission: Helping children from low-income families.",
        things: "clothes, furniture, toys",
      },
      {
        id: 3,
        name: '3. Foundation "Without a Home"',
        para: "Goal and mission: Helping people without a place to live.",
        things: "clothes, food, warm blankets",
      },
      {
        id: 4,
        name: '4. Foundation "For Children"',
        para: "Goal and mission: Helping children from low-income families.",
        things: "clothes, furniture, toys",
      },
      {
        id: 5,
        name: '5. Foundation "Without a Home"',
        para: "Goal and mission: Helping people without a place to live.",
        things: "clothes, food, warm blankets",
      },
      {
        id: 6,
        name: '6. Foundation "For Children"',
        para: "Goal and mission: Helping children from low-income families.",
        things: "clothes, furniture, toys",
      },
      {
        id: 7,
        name: '7. Foundation "Without a Home"',
        para: "Goal and mission: Helping people without a place to live.",
        things: "clothes, food, warm blankets",
      },
      {
        id: 8,
        name: '8. Foundation "For Children"',
        para: "Goal and mission: Helping children from low-income families.",
        things: "clothes, furniture, toys",
      },
      {
        id: 9,
        name: '9. Foundation "Without a Home"',
        para: "Goal and mission: Helping people without a place to live.",
        things: "clothes, food, warm blankets",
      },
    ],
  };

  const obj2 = {
    description:
      "Official excepteur ut velit velit excepteur amet officia occaecat veniam magna eu ad laborum.",
    items: [
      {
        id: 1,
        name: '1. Organization "Lorem Ipsum1"',
        para: "Aliquip occaecat do eu qui officia esse magna laboris incididunt. Quis reprehenderit fugiat reprehenderit cillum do pariatur ex.",
        things: "Sit, officia, pariatur",
      },
      {
        id: 2,
        name: '2. Organization "Lorem Ipsum2"',
        para: "Esse ullamco ipsum officia esse.",
        things: "Sit, adipisicing, mollit",
      },
      {
        id: 3,
        name: '3. Organization "Lorem Ipsum3"',
        para: "Proident id adipisicing eu qui ut fugiat qui labore.",
        things: "Fugiat, esse, cillum",
      },
      {
        id: 4,
        name: '4. Organization "Lorem Ipsum1"',
        para: "Aliquip occaecat do eu qui officia esse magna laboris incididunt. Quis reprehenderit fugiat reprehenderit cillum do pariatur ex.",
        things: "Sit, officia, pariatur",
      },
      {
        id: 5,
        name: '5. Organization "Lorem Ipsum2"',
        para: "Esse ullamco ipsum officia esse.",
        things: "Sit, adipisicing, mollit",
      },
      {
        id: 6,
        name: '6. Organization "Lorem Ipsum3"',
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
        id: 1,
        name: '1. Collection "Lorem Ipsum1"',
        para: "Pariatur exercitation non proident laboris mollit labore.",
        things: "Fugiat, esse, cillum",
      },
      {
        id: 2,
        name: '2. Collection "Lorem Ipsum2"',
        para: "Quis commodo elit consequat labore deserunt nostrud tempor nisi voluptate consequat do.",
        things: "Sit, officia, pariatur",
      },
      {
        id: 3,
        name: '3. Collection "Lorem Ipsum3"',
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
      <h1>Who do we help?</h1>
      <Decoration />
      <div className="HelpForm__Buttons">
        <button
          className="HelpForm__Button"
          onClick={() => handleButtonClick(obj1)}
        >
          Foundations
        </button>
        <button
          className="HelpForm__Button"
          onClick={() => handleButtonClick(obj2)}
        >
          Non-Governmental Organizations
        </button>
        <button
          className="HelpForm__Button"
          onClick={() => handleButtonClick(obj3)}
        >
          Local Collections
        </button>
      </div>

      <div>{selectedObj && <HelpForm data={selectedObj} />}</div>
    </div>
  );
};

export default Help;
