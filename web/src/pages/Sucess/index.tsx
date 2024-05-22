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
import { useEffect } from "react";

import { useCookies } from "react-cookie";
import { ManageCookiesKeysToUse } from "../../hooks/cookies/manageCookieKeys";

import { FormOrderSchemaProps } from "../Checkout/OrderForm";
import { useMarketContext } from "../../contexts/market/market.use.context";


export function Sucess() {

  const navigate = useNavigate()


  const { removeFromCart } = useMarketContext()

  const { userFormKey } = ManageCookiesKeysToUse;
  const [ cookies ] = useCookies([userFormKey])

  const userFormCookies: FormOrderSchemaProps = cookies[userFormKey];

  const city = userFormCookies?.city;
  const UF = userFormCookies?.UF;
  const neighborhood = userFormCookies?.neighborhood;
  const numberHome = userFormCookies?.numberHome;
  const road = userFormCookies?.road;
  const formOfPayment = userFormCookies?.formOfPayment;

  function goToHome(): void {
    navigate("/");
    return;
  };

  useEffect(() => {
    removeFromCart()
  }, [])

  const textRoadNumberHome = `${road}, ${numberHome}`;
  const textNeighborhoodCityUF = `${neighborhood} - ${city}, ${UF}`;

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
                  <span>Entrega em <strong>{textRoadNumberHome}</strong></span>
                  <span>{textNeighborhoodCityUF}</span>
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
                  <strong>{formOfPayment}</strong>
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