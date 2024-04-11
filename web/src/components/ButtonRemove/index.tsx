import { ButtonRemoveContainer } from "./styles";

import { PiTrash } from "react-icons/pi";

import { ButtonHTMLAttributes } from "react";


interface ButtonRemoveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClickButton?: () => void;
}


export function ButtonRemove(
  {
   
    onClickButton,

  }: ButtonRemoveProps) {


  function handleOnCkick(): void {
    onClickButton && onClickButton();
    
    return;
  };


  return (
    <ButtonRemoveContainer
      onClick={() => handleOnCkick()}
    >

      <PiTrash/>
      <span>REMOVER</span>

    </ButtonRemoveContainer>
  );
};
