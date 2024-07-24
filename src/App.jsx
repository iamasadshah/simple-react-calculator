import css from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
import { FaReact } from "react-icons/fa";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={`${css.calculator}`}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
      <p className={css.endmessage}>
        Simple React <FaReact /> Calculator Project
      </p>
    </div>
  );
}

export default App;
