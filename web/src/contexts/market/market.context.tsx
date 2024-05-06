import { ReactNode, createContext, useState } from "react";
import { CoffeeDatabaseProps } from "../../test/database";


interface CoffeeCartProps extends CoffeeDatabaseProps {
  quantity: number;
};

export type CartSections = "coffees";

 
export type CartItems = CoffeeCartProps;


export interface CartProps {
  coffees: CartItems[];
};


export interface MarketContextProviderProps {
  children: ReactNode;
};

export interface MarketContextProps {
  cart: CartProps;

  addToCart: (section: CartSections, productData: CartItems) => void;
  removeOfCart: (section: CartSections, productId: number) => void;
  updateCart: (section: CartSections, productData: Partial<CartItems>) => void;
  getCart: (action: "length-products" | "total-value-price") => number;
};


export const MarketContext = createContext({} as MarketContextProps);


export function MarketContextProvider({
 
  children,

}: MarketContextProviderProps) {

  const [ cart, setCart ] = useState<CartProps>({ coffees: [] });


  function addToCart(

    section: CartSections,
    productData: CartItems, 
  
  ): void {

    const productAlredyExists = cart[section].filter(product => product.id === productData.id)[0];

    if(productAlredyExists) {

      if (productData.quantity <= 0) {
        console.error("Quantidade inválida para adicionar ao carrinho.");
        return;
      }

      const newQuantity = (productAlredyExists.quantity ?? 0) + (productData.quantity ?? 0);
      const newPrice = (productAlredyExists.price / productAlredyExists.quantity) * newQuantity;

      updateCart(
        productAlredyExists.section,
        {
          ...productAlredyExists, 

          quantity: newQuantity,
          price: newPrice,
        }
      );

      return
    };
    
    setCart(prevState => {
      const newPrice = (productData.price * productData.quantity);

      const cartUpdated = {
        ...prevState,
        
        [section]: [
          ...prevState[section], 
          {...productData, price: newPrice}
        ]};

      console.log(cartUpdated);

      return cartUpdated;
    })

    return;
  };

  function removeOfCart(

    section: CartSections,
    productId: number,

  ): void {

    let productExists: CartItems | undefined = undefined;

    const cartUpdated = cart[section].filter((product) => {

      if(product.id === productId) {
        productExists = product;

        return false;
      };

      return true; 
    });

    if(!productExists) {
      console.error("Id de produto inválido.");
    };

    console.log(cartUpdated)
    setCart(prevState => ({...prevState, [section]: cartUpdated}));

    return;
  };

  function updateCart(

    section: CartSections,
    productDataToUpdate: Partial<CartItems>

  ): void {

    const productAlredyExists = cart[section].filter(product => product.id === productDataToUpdate.id)[0];

    if(!productAlredyExists) {
      console.error("Não foi possível atualizar o produto no carrinho.");
      return;
    };

    const updatedCart = cart[section].map((product) => {

      if(productDataToUpdate.id === product.id) {
        
        return { 
          ...productAlredyExists,
          ...productDataToUpdate 
        };
      };

      return product;
    })

    console.log("updated_at", updatedCart)

    setCart(prevState => ({
      ...prevState, 
      [section]: updatedCart,
    }));

    return;
  };

  function getCart( 
    action: "length-products" | "total-value-price"
  ) : number {

    if(action === "length-products") {
      return Object.entries(cart).reduce((current, products: [string, CartItems[]]) => {
        return current + products[1].length;
      }, 0);
    };

    if(action === "total-value-price") {
      return Object.entries(cart).reduce((current, products: [string, CartItems[]]) => {
        
        return current + products[1].reduce((currentProduct, product) => {

          return currentProduct + product.price; 

        }, 0);
      }, 0);
    }

    return 0;
  };

  return(
    <MarketContext.Provider
      value={{
        cart,
        addToCart,
        updateCart,
        removeOfCart,
        getCart,
      }}
    >

      {
        children
      }

    </MarketContext.Provider>
  );
};