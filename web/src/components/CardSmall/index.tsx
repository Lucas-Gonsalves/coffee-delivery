import { useEffect, useState } from 'react';
import { InputCounter } from '../InputCounter';
import { ButtonSet, CardSmallContainer, InformationsContent, TitleContent } from './styles'
import { ButtonRemove } from '../ButtonRemove';
import { translatePrice } from '../../utils/translate/price.translate';
import { useMarketContext } from '../../contexts/market/market.use.context';
import { CartSections } from '../../reducers/market/reducers';


interface CardSmallProps {
  "cart-id": number;
  "cart-section": CartSections;
  "card-image-src": string;
  "card-image-alt": string;
  "card-price": number;
  "card-title": string;
  "card-quantity": number;
}


export function CardSmall({

  "cart-id": id,
  "cart-section": section,
  "card-image-src": imageSrc,
  "card-image-alt": imageAlt,
  "card-price": price,
  "card-title": title,
  "card-quantity": quantity = 1,

}: CardSmallProps ) {

  const { removeFromCart, updateCart } = useMarketContext();

  const [ counter, setCounter ] = useState<number>(quantity);


  function onClickInputCounter(action: "increase" | "decrease"): void {

    setCounter((prevState) => {
  
      if (action === "increase") {
        return prevState + 1;

      } else if (action === "decrease" && prevState > 1) {
        return prevState - 1;
      
      } else return prevState;
    });

    return;
  };


  function handleRemoveItemOfCart(): void {
    removeFromCart(section, id);
    return;
  };

  useEffect(() => {

    const newPrice = (price / quantity) * counter;

    updateCart(section, { id, quantity: counter, price: newPrice }, id);

  }, [counter])


  const priceFormated = translatePrice(price);

  return(
    <CardSmallContainer>

      <img 
        src={imageSrc} 
        alt={imageAlt} 
      />


      <InformationsContent>
        
        <TitleContent>
          <h3>{title}</h3>

          <span>
            R$ <strong>{priceFormated}</strong>
          </span>
        </TitleContent>

        <ButtonSet>
          <InputCounter
            counter-value={counter}
            onClickInputCounter={onClickInputCounter}
          />

          <ButtonRemove
            onClickButton={handleRemoveItemOfCart}
          />
        </ButtonSet>

      </InformationsContent>


    </CardSmallContainer>
  );
};