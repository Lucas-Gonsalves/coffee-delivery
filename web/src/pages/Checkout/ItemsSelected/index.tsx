import { CoffeeCardSmall } from "../../../components/CoffeeCardSmall";
import { CoffeeCardsSmallSet, ItemsSelectedContainer, ItemsSelectedContent, PayInformations } from "./styles";


import { assetsImports } from "../../../test/assetsImports";
import { Button } from "../../../components/Button";



export function IntemsSelected() {
  return (

    <ItemsSelectedContainer>

      <h2>Cafés selecionados</h2>

      <ItemsSelectedContent>


        <CoffeeCardsSmallSet>
          <li>
            <CoffeeCardSmall 
              card-image-src={assetsImports.coffees.express.traditional}
              card-image-alt="Café expresso tradicional"
              card-price="9,90"
              card-title="Expresso Tradicional"
              card-quantity="2"
            />
          </li>

          <li>
            <CoffeeCardSmall 
              card-image-src={assetsImports.coffees.latte}
              card-image-alt="Café latte"
              card-price="19,80"
              card-title="Latte"
              card-quantity="3"
            />
          </li>
        </CoffeeCardsSmallSet>


        <PayInformations>
          <div>
            <span>Total de itens</span>
            <span>R$ { "29,70" }</span>
          </div>

          <div>
            <span>Entrega</span>
            <span>R$ { "3,50" }</span>
          </div>

          <div>
            <strong>Total</strong>
            <strong>R$ { "33,20" }</strong>
          </div>
        </PayInformations>


        <Button
          title="CONFIRMAR PEDIDO"
        />


      </ItemsSelectedContent>

    </ItemsSelectedContainer>

  );
};