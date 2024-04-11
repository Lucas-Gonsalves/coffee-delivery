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
  },

  ref 

) => {

  return (

    <InputContainer
      id={id}
      htmlFor={label}
    >
      <InputSuffixSet>
        <input
          ref={ref}
          id={label}
          type={type}
          placeholder={placeholder}
        />
        
          {
            suffix.length > 0 && 
              ( <div><SuffixContainer>{ suffix }</SuffixContainer></div>)
          }
      </InputSuffixSet>

        {
          error && 
            ( <ErrorContianer>{ error }</ErrorContianer> )
        }
    </InputContainer>
  );
});