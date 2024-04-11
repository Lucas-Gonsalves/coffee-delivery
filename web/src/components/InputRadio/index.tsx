import { InputHTMLAttributes, forwardRef } from "react";
import { InputRadioContainer, InputRadioContent } from "./styles";
import { IconType } from "react-icons";


interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  "label-icon": IconType;
  "label-input-id": string;
  "radio-group": string;
  "radio-value": string;
}


export const InputRadio = forwardRef<HTMLInputElement, InputRadioProps >((
  {

    id,
    "label-icon": Icon,
    "radio-group": group,
    "radio-value": value,
    "label-input-id": htmlFor,

  },
  
  ref,

) => {

  return (

    <InputRadioContainer
      htmlFor={htmlFor}
      id={id}
    >


      <input 
        id={htmlFor}
        type="radio"
        name={group}
        value={value}
        ref={ref}
      />

      <InputRadioContent>
        <div/>
        
        {
          Icon && <Icon/>
        }
        
        <span>{value}</span>
      </InputRadioContent>

    </InputRadioContainer>
  )
})