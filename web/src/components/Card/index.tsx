import { 

  BuyActions, 
  CardContianer, 
  ImageTagContent, 
  Price, 
  PriceBuyActionsContent, 
  Tags, 
  TitleContent,

} from "./styles";

import { TagColors } from "../Tag/styles";

import { Tag } from "../Tag";
import { ButtonMarket } from "../ButtonMarket";
import { useState } from "react";
import { InputCounter } from "../InputCounter";
import { translatePrice } from "../../utils/translate/price.translate";

import { useMarketContext } from "../../contexts/market/market.use.context";
import { CartItems, CartSections } from "../../reducers/market/reducers";


interface Card {
  "card-id": number,
  "card-section": CartSections,
  "card-image-src": string;
  "card-image-alt": string;
  "card-tags-title": [string, string?, string?];
  "card-tags-color": TagColors;
  "card-title": string;
  "card-description": string;
  "card-price": number;
};

export function Card({

  "card-id": id,
  "card-section": section,
  "card-image-src": imageSrc,
  "card-image-alt": imageAlt,
  "card-tags-title": tagsTitle,
  "card-tags-color": tagsColor,
  "card-title": title,
  "card-description": description,
  "card-price": price,

}: Card) {
  
  const { addToCart } = useMarketContext()

  const [ counter, setCouter ] = useState<number>(1);

  function onClickInputCounter(action: "increase" | "decrease"): void {

    if(action === "increase") {
      setCouter(prevState => prevState + 1);
    
    }else if(action === "decrease" && counter > 1) {
      setCouter(prevState => prevState - 1);
    };

    return;
  };


  function onClickButtonMarket() {

    const cardData: CartItems = {
      id,
      section,
      imageSrc,
      imageAlt,
      tagsTitle,
      tagsColor,
      description,
      price,
      quantity: counter,
      title
    };

    addToCart(section, cardData)
    return;
  };


  const priceFormated = translatePrice(price);

  return (
    <CardContianer>

      <ImageTagContent>
        <img src={imageSrc} alt={imageAlt} />

        <Tags>
          {
            tagsTitle.map((tagTitle) => (
              tagTitle && 
                <li key={`key_tag_${tagTitle}`}>
                  <Tag 
                    tag-title={tagTitle} 
                    tag-color={tagsColor}
                  />
                </li>
            ))
          }
        </Tags>

      </ImageTagContent>

      <TitleContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </TitleContent>
    
      <PriceBuyActionsContent>
        <Price>
          <span>R$ </span>
          <strong>{priceFormated}</strong>
        </Price>

        <BuyActions>
          <ButtonMarket
            onClick={onClickButtonMarket}
          />

          <InputCounter
            counter-value={counter}
            onClickInputCounter={onClickInputCounter}
          />
        </BuyActions>

      </PriceBuyActionsContent>
    </CardContianer>
  );
};