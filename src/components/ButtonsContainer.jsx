import React from "react";
import css from "./ButtonContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "C",
    "0",
    ".",
    "/",
    "=",
  ];
  return (
    <div className={css.buttonContainer}>
      {buttonNames.map((buttonNames) => (
        <button
          key={buttonNames}
          className={css.button}
          onClick={() => onButtonClick(buttonNames)}
        >
          {buttonNames}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
