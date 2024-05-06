import { ReactNode, createContext, useReducer } from "react";
import { CartItems, CartSections, CartState, marketReducer } from "../../reducers/market/reducers";
import { addProductInCartAction, removeProductFromCartAction, updateProductInCartAction } from "../../reducers/market/actions";


export interface MarketContextProviderProps {
  children: ReactNode;
};

export interface MarketContextProps {
  cart: CartState;

  addToCart: (section: CartSections, productData: CartItems) => void;
  removeFromCart: (section: CartSections, productId: number) => void;
  updateCart: (section: CartSections, productDataToUpdate: Partial<CartItems>, productId: number) => void;
  getCart: () => {cartLenght: number, cartAllPrice: number};
};

export const MarketContext = createContext({} as MarketContextProps);


export function MarketContextProvider({
 
  children,

}: MarketContextProviderProps) {

  const[ cart, dispatch ] = useReducer(marketReducer, 
    {
      coffees: []
    }
  );

  function addToCart(section: CartSections, productData: CartItems) {

    const productAlredyExists = cart[section].filter((product: CartItems) => product.id === productData.id)[0];

    if(productAlredyExists) {
      const newQuantity = productAlredyExists.quantity + productData.quantity;
      const newPrice = productAlredyExists.price + productData.price;

      updateCart(section, {quantity: newQuantity, price: newPrice}, productAlredyExists.id);
      return;
    };

    dispatch(addProductInCartAction(productData, section));
    return;
  };

  function removeFromCart(section: CartSections, productId: number) {
    dispatch(removeProductFromCartAction(productId, section));
    return;
  };

  function updateCart(section: CartSections, productDataToUpdate: Partial<CartItems>, productId: number) {
    dispatch(updateProductInCartAction(productDataToUpdate, productId, section));
    return;
  };
  

  function getCart() {
    const cartLenght = Object.entries(cart).reduce((current, products: [string, CartItems[]]) => {
      return current + products[1].length;
    }, 0);


    const cartAllPrice = Object.entries(cart).reduce((current, products: [string, CartItems[]]) => {
      return current + products[1].reduce((currentProduct, product) => {

        return currentProduct + product.price; 
      }, 0);
    }, 0);

    return { cartLenght, cartAllPrice}
  };



  return(
    <MarketContext.Provider
      value={{
        cart,
        addToCart,
        updateCart,
        removeFromCart,
        getCart,
      }}
    >

      {
        children
      }

    </MarketContext.Provider>
  );
};