import { HomeContainer, WelcomeContent } from "./styles";

import coffeeDeliveryLogoBig from "../../assets/background/coffe-delivey-logo-big.svg";
import { Presentation } from "./Presentation";


export function Home() {
  return (
    <HomeContainer>

      <WelcomeContent>
        <Presentation/>
        <img src={coffeeDeliveryLogoBig} alt="Logo Coffe Delivery" />
      </WelcomeContent>


    </HomeContainer>
  );
};