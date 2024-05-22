import { DescriptionContent, NotFoundContainer, ApresentationContent, TitleCotent } from "./styles";

import coffeeDeliveryLogoBlank from "../../assets/logos/coffee-delivery-logo-big-blank.svg";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function NotFound() {

  const navigate = useNavigate()

  function goToHome(): void {
    navigate("/");
    
    return;
  };

  return(
    <NotFoundContainer>

      <img src={coffeeDeliveryLogoBlank}/>

      <ApresentationContent>

        <TitleCotent>
          <h1>404...</h1>
          <span>Atenção 404! Nada por aqui.</span>
        </TitleCotent>



        <DescriptionContent>
          <h2>A loja responde:</h2>

          <div>
            <p>Acho que você chegou aos nossos limites.</p>
            <p>A página que você requisitou não foi encontrada.</p>
          </div>

          <Button
            title="VOLTAR AO MENU PRINCIPAL"
            onClick={goToHome}
          />
        </DescriptionContent>

      </ApresentationContent>

    </NotFoundContainer>
  );
};