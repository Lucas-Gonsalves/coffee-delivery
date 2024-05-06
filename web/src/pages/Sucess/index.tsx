import { 

  BoxAdressAndButtonSet,
  BoxAdressInformation, 
  ImgDeliveryManDesktop, 
  ImgDeliveryManMobile, 
  SucessContainer, 
  SucessContent, 
  TitleContent, 
  Topic,
} from "./styles";

import { PiMapPinFill, PiTimerFill, PiCurrencyDollarLight } from "react-icons/pi";
import deliveryMan from "../../assets/background/delivery-man.svg";

import { IconInformation } from "../../components/IconInformation";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";


export function Sucess() {

  const navigate = useNavigate()

  function goToHome(): void {
    navigate("/");
    return;
  };

  return (
    <SucessContainer>
      

      <main>
        <Header/>

        <SucessContent>

          <ImgDeliveryManMobile>
            <img src={deliveryMan} />
          </ImgDeliveryManMobile>

          <BoxAdressAndButtonSet>
            <TitleContent>
              <h1>Uhu! Pedido confirmado</h1>
              <p>Agora é só aguardar que logo o café chegará até você</p>
            </TitleContent>



            <BoxAdressInformation>

              <Topic>
                <IconInformation
                  icon-svg={PiMapPinFill}
                  icon-color="purple"
                />  

                <div>
                  <span>Entrega em <strong>{"Rua João Daniel Martinelli, 102"}</strong></span>
                  <span>{"Farrapos"} - {"Porto Alegre"}, {"RS"}</span>
                </div>
              </Topic>

              <Topic>
                <IconInformation
                  icon-svg={PiTimerFill}
                  icon-color="yellow"
                />
                <div>
                  <span>Previsão de entrega</span>
                  <strong>{"20 min - 30 min"}</strong>
                </div>
              </Topic>

              <Topic>
                <IconInformation
                  icon-svg={PiCurrencyDollarLight}
                  icon-color="yellow-dark"
                />

                <div>
                  <span>Pagamento na entrega</span>
                  <strong>{"Cartão de Crédito"}</strong>
                </div>
              </Topic>
            </BoxAdressInformation>

            <Button
              title="Voltar para o menu principal"
              onClick={goToHome}
            />
          </BoxAdressAndButtonSet>

          <ImgDeliveryManDesktop>
            <img src={deliveryMan}  />
          </ImgDeliveryManDesktop>
        </SucessContent>


      </main>

    </SucessContainer>
  );
};