import { BuyActions, CoffeeCardContianer, ImageTagContent, Price, PriceBuyActionsContent, Tags, TitleContent } from "./styles";

import { TagColors } from "../CoffeeTag/styles";

import { CoffeeTag } from "../CoffeeTag";
import { ButtonMarket } from "../ButtonMarket";
import { useState } from "react";
import { InputCounter } from "../InputCounter";


interface CoffeeCard {
  "card-image-src": string;
  "card-image-alt"?: string;
  "card-tags-title": [string, string?, string?];
  "card-tags-color"?: TagColors;
  "card-title": string;
  "card-description"?: string;
  "card-price": string;
};

export function CoffeeCard({

  "card-image-src": imageSrc,
  "card-image-alt": imageAlt,
  "card-tags-title": tagsTitle,
  "card-tags-color": tagsColor,
  "card-title": title,
  "card-description": description,
  "card-price": price,

}: CoffeeCard) {
  
  const [ counter, setCouter ] = useState<string>("0");


  function onClickInputCounter(action: "increase" | "decrease"): void {

    if(action === "increase") {
      setCouter(prevState => (Number(prevState) + 1).toString());
    
    }else if(action === "decrease" && Number(counter) > 0) {
      setCouter(prevState => (Number(prevState) - 1).toString());
    };

    return;
  };


  function onClickButtonMarket() {

    const cardData = {
      imageSrc: imageSrc,
      imageAlt: imageAlt,
      tagsTitle: tagsTitle,
      tagsColor: tagsColor,
      description: description,
      quantity: parseInt(counter),
      price: parseInt(price),
    };

    console.log({[title]: cardData});
    return;
  };

  return (
    <CoffeeCardContianer>

      <ImageTagContent>
        <img src={imageSrc} alt={imageAlt} />

        <Tags>
          {
            tagsTitle.map((tagTitle) => (
              tagTitle && 
                <li key={`key_tag_${tagTitle}`}>
                  <CoffeeTag 
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
          <strong>{price}</strong>
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
    </CoffeeCardContianer>
  );
};