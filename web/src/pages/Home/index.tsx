import { HomeContainer, WelcomeContent } from "./styles";

import coffeeDeliveryLogoBig from "../../assets/background/coffe-delivey-logo-big.svg";

import { Presentation } from "./Presentation";
import { Products } from "./Products";
import { Header } from "../../components/Header";


export function Home() {
  return (
    <HomeContainer>

      <Header/>
      <WelcomeContent>

          <Presentation/>
          <img src={coffeeDeliveryLogoBig} alt="Logo Coffe Delivery" />

      </WelcomeContent>

      <Products/>

    </HomeContainer>
  );
};