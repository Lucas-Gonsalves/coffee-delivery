import { ButtonRemoveContainer } from "./styles";

import { PiTrash } from "react-icons/pi";

import { ButtonHTMLAttributes } from "react";


interface ButtonRemoveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClickButton?: () => void;
}


export function ButtonRemove(
  {
   
    onClickButton,
    ...rest

  }: ButtonRemoveProps) {


  function handleOnCkickButton(): void {
    onClickButton && onClickButton();
    
    return;
  };


  return (
    <ButtonRemoveContainer
      {...rest}
      onClick={() => handleOnCkickButton()}
    >

      <PiTrash/>
      <span>REMOVER</span>

    </ButtonRemoveContainer>
  );
};
