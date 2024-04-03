import { PresentationContainer, TitleSet, IconsSet } from "./styles";

import { PiCoffeeFill, PiPackageFill, PiShoppingCartFill, PiTimerFill } from "react-icons/pi";
import { IconInformation } from "../../../components/IconInformation";


export function Presentation() {

  return(
    <PresentationContainer>

      <TitleSet>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
      </TitleSet>

        <IconsSet>
          <div>
            <IconInformation
              title="Compra simples e segura"
              icon-svg={PiShoppingCartFill}
              icon-color="yellow-dark"
            />

            <IconInformation
              title="Entrega rápida e rastreada"
              icon-svg={PiTimerFill}
              icon-color="yellow"
            />
          </div>

          <div>
            <IconInformation
              title="Embalagem mantém o café intacto"
              icon-svg={PiPackageFill}
              icon-color="brown"
            />

            <IconInformation
              title="O café chega fresquinho até você"
              icon-svg={PiCoffeeFill}
              icon-color="purple"
            />
          </div>
        </IconsSet>
    </PresentationContainer>
  );
};