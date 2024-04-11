import { CheckoutContainer, CheckoutContent } from "./styles";

import { Header } from "../../components/Header";
import { IntemsSelected } from "./ItemsSelected";
import { OrderForm } from "./OrderForm";


export function Checkout() {
  return (
    <CheckoutContainer>
      
      <main>
        <Header/>

        <CheckoutContent>

          <OrderForm />
          <IntemsSelected />
          
        </CheckoutContent>

      </main>

    </CheckoutContainer>
  );
};