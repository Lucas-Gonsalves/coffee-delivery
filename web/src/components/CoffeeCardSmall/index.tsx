import { useState } from 'react';
import { InputCounter } from '../InputCounter';
import { ButtonSet, CoffeeCardSmallContainer, InformationsContent, TitleContent } from './styles'
import { ButtonRemove } from '../ButtonRemove';


interface CoffeeCardSmallProps {
  "card-image-src": string;
  "card-image-alt": string;
  "card-price": string;
  "card-title": string;
  "card-quantity": string;
}


export function CoffeeCardSmall({

  "card-image-src": imageSrc,
  "card-image-alt": imageAlt,
  "card-price": price,
  "card-title": title,
  "card-quantity": quantity = "1",


}: CoffeeCardSmallProps ) {

  const [ counter, setCouter ] = useState<string>(quantity);


  function onClickInputCounter(action: "increase" | "decrease"): void {

    if(action === "increase") {
      setCouter(prevState => (Number(prevState) + 1).toString());
    
    }else if(action === "decrease" && Number(counter) > 0) {
      setCouter(prevState => (Number(prevState) - 1).toString());
    };

    return;
  };
  

  return(
    <CoffeeCardSmallContainer>

      <img 
        src={imageSrc} 
        alt={imageAlt} 
      />


      <InformationsContent>
        
        <TitleContent>
          <h3>{title}</h3>

          <span>
            R$ <strong>{price}</strong>
          </span>
        </TitleContent>

        <ButtonSet>
          <InputCounter
            counter-value={counter}
            onClickInputCounter={onClickInputCounter}
          />

          <ButtonRemove/>
        </ButtonSet>

      </InformationsContent>


    </CoffeeCardSmallContainer>
  );
};