import { CoffeeCardsSmallSet, CoffeCardSmallSetOverflow, ItemsSelectedContainer, ItemsSelectedContent, PayInformations } from "./styles";

import { CardSmall } from "../../../components/CardSmall";
import { Button } from "../../../components/Button";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMarketContext } from "../../../contexts/market/market.use.context";
import { translatePrice } from "../../../utils/translate/price.translate";


export function ItemsSelected() {
  const navigate = useNavigate();

  const { cart, getCart } = useMarketContext();
  const { cartAllPrice, cartLenght } = getCart();

  const cartProductsExists = cartLenght > 0;
  
  
  const [ delivery, setDelivery] = useState<number>(cartProductsExists ? 3.2 : 0);
  const [ totalProd, setTotalProd] = useState<number>(cartAllPrice);

  const messageButtonEndOrder = cartProductsExists ? "Confirmar Pedido" : "Volte e selecione um produto";


  function goToHome(): void {
    navigate("/");
    return
  }

  useEffect(() => {
    setDelivery(prevState => cartLenght > 0 ? prevState : 0);
    setTotalProd(cartAllPrice);
  }, [cart]);

  const totalProdFormatted = translatePrice(totalProd);
  const deliveryFormatted = translatePrice(delivery);
  
  const totalWithDeliveryFormatted = translatePrice(totalProd + delivery);

  const isToGoHome = !cartProductsExists ? goToHome : () => {};
  const ButtonColor = cartProductsExists ? "yellow" : "red";

  return (

    <ItemsSelectedContainer>

      <h2>Cafés selecionados</h2>

      <ItemsSelectedContent>


    
        <CoffeeCardsSmallSet>

          { cartProductsExists &&
            Object.entries(cart).map(([, products]) => {

              if(!Array.isArray(products)){
                return;
              };

              return products.map((product) => {

                return (
                  <li key={`product_key_${product.id}`}>
                    <CardSmall
                      cart-id={product.id}
                      cart-section={product.section}
                      card-image-src={product.imageSrc}
                      card-image-alt={product.imageAlt}
                      card-price={product.price}
                      card-title={product.title}
                      card-quantity={product.quantity}
                    />
                  </li>
                )
              })
            }) 
          }

          {
            !cartProductsExists && 
              <li id="cart-not-exists">
                
                <h3>Nenhum produto no carrinho.</h3>

              </li>
          }

        </CoffeeCardsSmallSet>
    

        <PayInformations>
          {
            cartLenght > 3 && <CoffeCardSmallSetOverflow />
          }

          <div>
            <span>Total de itens</span>
            <span>R$ { totalProdFormatted }</span>
          </div>

          <div>
            <span>Entrega</span>
            <span>R$ { deliveryFormatted }</span>
          </div>

          <div>
            <strong>Total</strong>
            <strong>R$ { totalWithDeliveryFormatted }</strong>
          </div>
        </PayInformations>


        <Button
          form="order_form"
          title={messageButtonEndOrder}
          type="submit"
          color={ButtonColor}
          onClick={isToGoHome}
        />

      </ItemsSelectedContent>

    </ItemsSelectedContainer>

  );
};