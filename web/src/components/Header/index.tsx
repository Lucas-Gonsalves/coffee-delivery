import { HeaderContainer, AdressMarketSet, Adress, Market, MarketNotification } from "./styles";

import coffeeLogo from "../../assets/logos/coffe-delivery-header.svg";

import { PiMapPinFill } from "react-icons/pi";
import { PiShoppingCartFill } from "react-icons/pi";


export function Header() {
  return(
    <HeaderContainer>

      <img src={coffeeLogo} />

      <AdressMarketSet>
        <Adress>
          <PiMapPinFill/>
          <p>Guaramirim, SC</p>
        </Adress>


        <Market>
          <PiShoppingCartFill/>

          <MarketNotification>
            3
          </MarketNotification>

        </Market>
      </AdressMarketSet>

    </HeaderContainer>
  );
};