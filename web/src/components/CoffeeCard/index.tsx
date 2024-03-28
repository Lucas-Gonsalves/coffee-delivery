import { CoffeeCardContianer, ImageTagContent, Price, PriceBuyActions, TitleContent } from "./styles";

import { TagColors } from "../CoffeeTag/styles";

import { CoffeeTag } from "../CoffeeTag";


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

  return (
    <CoffeeCardContianer>

      <ImageTagContent>
        <img src={imageSrc} alt={imageAlt} />

        {
          tagsTitle.map((tagTitle) => (
            tagTitle && 
              <CoffeeTag 
                tag-title={tagTitle} 
                tag-color={tagsColor}
              />
          ))
        }

      </ImageTagContent>

      <TitleContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </TitleContent>
    
      <PriceBuyActions>
        <Price>
          <span>R$</span>
          <strong>{price}</strong>
        </Price>

        {
          //IconMarket
          //QuantitySet
        }

      </PriceBuyActions>
    </CoffeeCardContianer>
  );
};