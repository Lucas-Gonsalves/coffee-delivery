import { 

   OrderFormContainer,
   Form,
   InputSet,
   CepUFContainer,
   CityNeighborhoodContainer,
   HomeNumberRoadContainer,
   AdressInformation,
   PaymentType,
   AdressTitle,
   PaymentTitle,
   RadiosSet,

 } from "./styles";

 import {

  PiBank, 
  PiCreditCard, 
  PiCurrencyDollarLight, 
  PiMapPinLine, 
  PiMoney 

} from "react-icons/pi";
 
import { Input } from "../../../components/Input";
import { InputRadio } from "../../../components/InputRadio";


export function OrderForm() {
  return (
    <OrderFormContainer>
      
      <h1>Complete seu pedido</h1>

      <Form>

        <AdressInformation>
          <AdressTitle>
            <PiMapPinLine />

            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AdressTitle>

          <InputSet>
          
            <CepUFContainer>
              <Input
                id="label_cep"
                placeholder="CEP"
                label="caixa_de_entrada_cep"
              />

              <Input
                id="label_UF"
                placeholder="UF"
                label="caixa_de_entrada_UF"
              />
            </CepUFContainer>  

            <CityNeighborhoodContainer>
              <Input
                id="label_cidade"
                placeholder="Cidade"
                label="caixa_de_entrada_cidade"
              />

              <Input
                id="label_bairro"
                placeholder="Bairro"
                label="caixa_de_entrada_bairro"
              />
              
            </CityNeighborhoodContainer>

            <HomeNumberRoadContainer>
              <Input
                id="label_numero_casa"
                placeholder="Número"
                label="caixa_de_entrada_numero_da_casa"
              />

              <Input
                id="label_rua"
                placeholder="Rua"
                label="caixa_de_entrada_rua"
              />
            </HomeNumberRoadContainer>

            <Input
              id="label_complemento"
              placeholder="Complemento"
              label="caixa_de_entrada_complemento"
            />
          </InputSet>

        </AdressInformation>

        <PaymentType>
          <PaymentTitle>
              <PiCurrencyDollarLight />

              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>

          </PaymentTitle>

          <RadiosSet>

            <div>
              <InputRadio
                label-icon={PiCreditCard}
                label-input-id="credit-pay"
                radio-group="payment-type"
                radio-value="Cartão de crédito"
              />

              <InputRadio
                label-icon={PiBank}
                label-input-id="debit-pay"
                radio-group="payment-type"
                radio-value="Cartão de débito"
              />

            </div>

            <InputRadio
              label-icon={PiMoney}
              label-input-id="money-pay"
              radio-group="payment-type"
              radio-value="Dinheiro"
            />
          </RadiosSet>

        </PaymentType>
        
      </Form>



    </OrderFormContainer>
  );
};