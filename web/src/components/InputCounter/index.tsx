import { InputCounterContainer } from "./styles";


import { MouseEvent } from "react";
import { PiPlus, PiMinus  } from "react-icons/pi";


interface InputCounterProps {
  onClickInputCounter: (action: "increase" | "decrease") => void;
  "counter-value": string
};


export function InputCounter({

  onClickInputCounter,
  "counter-value": counterValue,

}: InputCounterProps) {


  function handleOnClickInputCounter(event: MouseEvent<HTMLButtonElement>) {
    const activedButton = event.currentTarget;
    const action = activedButton.getAttribute("data-action");

    if(action === "increase" || action === "decrease") {
      onClickInputCounter(action);
    };

    return;
  };


  return(
    <InputCounterContainer>
      <button
        type="button"
        data-action="decrease"
        onClick={(e) => handleOnClickInputCounter(e)}
      >
        <PiMinus/>
      </button>

      <input
        type="number"
        value={counterValue}
        tabIndex={-1}
        readOnly
      />

      <button
        type="button"
        data-action="increase"
        onClick={(e) => handleOnClickInputCounter(e)}
      >
        <PiPlus/>
      </button>
    </InputCounterContainer>
  );
};