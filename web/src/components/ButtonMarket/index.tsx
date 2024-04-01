import { useState } from "react";
import { ButtonMarketContainer, ButtonMarketHoverContainer } from "./styles";
import { PiShoppingCartSimpleFill } from "react-icons/pi";


interface ButtonMarketProps {
  onClick?: () => void;
};


export function ButtonMarket({

  onClick

}: ButtonMarketProps) {

  const [ isActive, setIsActive ] = useState<boolean>(false)

  function changeIsActive(): void {
    isActive ? setIsActive(false) : setIsActive(true);
    return;
  };

  function handleOnClick(): void {
    onClick && onClick()
    return;
  };

  return(
    <ButtonMarketContainer
      onClick={
        () => { handleOnClick(), changeIsActive() }
      }
    > 
      <ButtonMarketHoverContainer
        data-is-button-active={isActive}
      />
      <PiShoppingCartSimpleFill/>
    </ButtonMarketContainer>  
  );
};