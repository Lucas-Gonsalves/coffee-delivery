import { CheckoutContainer, CheckoutContent } from "./styles";

import { Header } from "../../components/Header";
import { ItemsSelected } from "./ItemsSelected";
import { OrderForm } from "./OrderForm";


export function Checkout() {


  return (
    <CheckoutContainer>
      
      <main>
        <Header/>

        <CheckoutContent>

          <OrderForm />

          <ItemsSelected />
          
        </CheckoutContent>

      </main>

    </CheckoutContainer>
  );
};