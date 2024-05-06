import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color?: "yellow" | "red";
  OnClick?: () => void;
};


export function Button({
  
  title,
  color="yellow",
  OnClick,
  ...rest

}: ButtonProps) {

  function handleOnClick() {
    OnClick && OnClick();
    return;
  };

  return(
    <ButtonContainer
      data-color-background={color}
      onClick={handleOnClick}
      {...rest}
    >
      {
        title
      }

    </ButtonContainer>
  )
}