import { HomeContainer, PresentationBackground, WelcomeContent, WelcomeContentLogo } from "./styles";

import coffeeDeliveryLogoBig from "../../assets/logos/coffe-delivey-logo-big.svg";
import backgroundBlurPresentation from "../../assets/background/blur-background-presentation.svg"

import { Presentation } from "./Presentation";
import { Products } from "./Products";
import { Header } from "../../components/Header";


export function Home() {
  return (
    <HomeContainer>

      <main>
        <Header/>

        <WelcomeContent>
          <PresentationBackground
            src={backgroundBlurPresentation}
          />
          
          <Presentation/>
          <WelcomeContentLogo src={coffeeDeliveryLogoBig} alt="Logo Coffe Delivery" />
        
        </WelcomeContent>

        <Products/>
      </main>

    </HomeContainer>
  );
};