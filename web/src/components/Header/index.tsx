import { HeaderContainer, AdressMarketSet, Adress, Market, MarketNotification } from "./styles";

import coffeeLogo from "../../assets/logos/coffe-delivery-header.svg";

import { PiMapPinFill } from "react-icons/pi";
import { PiShoppingCartFill } from "react-icons/pi";

import { useNavigate, useLocation } from "react-router-dom";
import { useMarketContext } from "../../contexts/market/market.use.context";


export function Header() {

  const { getCart } = useMarketContext();
  const { cartLenght } = getCart()

  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();

  function goToHome(): void {
    
    if(currentPath !== "/") {
      navigate("/");
    
    } else {
      window.location.reload();
    };
    return;
  };

  function goToCheckout(): void {
    
    if(currentPath !== "/checkout") {
      navigate("/checkout");

    } else {
      window.location.reload();
    };;

    return;
  };

  const LenghtOfAllCartProducts = cartLenght.toString();

  return(
    <HeaderContainer>

      <img src={coffeeLogo} 
        onClick={() => goToHome()}
      />

      <AdressMarketSet
        onClick={() => goToCheckout()}
      >
        <Adress>
          <PiMapPinFill/>
          <p>Guaramirim, SC</p>
        </Adress>


        <Market
          onClick={() => goToCheckout()}
        >
          <PiShoppingCartFill/>

          <MarketNotification>
            <span>
              {LenghtOfAllCartProducts}
            </span>
          </MarketNotification>

        </Market>
      </AdressMarketSet>

    </HeaderContainer>
  );
};