import { InputHTMLAttributes, forwardRef } from "react";
import { ErrorContianer, InputContainer, InputSuffixSet, SuffixContainer } from "./styles";



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  suffix?: string
}


export const Input = forwardRef<HTMLInputElement, InputProps>((

  { 
    id="",
    label,
    error, 
    placeholder, 
    type= "text", 
    suffix= "",
    ...rest
  },

  ref 

) => {

  const isAriaInvalid = error ? "true" : "false";

  return (

    <InputContainer
      id={id}
      htmlFor={label}
    >
      <InputSuffixSet
          aria-invalid={isAriaInvalid}
      >
        <input
          ref={ref}
          id={label}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        
          {
            suffix.length > 0 && 
              ( <div><SuffixContainer>{ suffix }</SuffixContainer></div>)
          }
      </InputSuffixSet>
    </InputContainer>
  );
});