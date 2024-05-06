import { CartItems, CoffeeCartProps } from "./reducers";
import { CartSections } from "./reducers";


export enum ActionTypes {
  ADD_PRODUCT_IN_CART = "ADD_PRODUCT_IN_CART",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
  UPDATE_PRODUCT_IN_CART = "UPDATE_PRDUCT_IN_CART",
  GET_PRODUCT_IN_CART = "GET_PRODUCT_IN_CART",
};


export function addProductInCartAction(product: CoffeeCartProps, section: CartSections) {
  return {
    type: ActionTypes.ADD_PRODUCT_IN_CART,
    payload: {
      product,
      section,
    }
  } as const;
};


export function removeProductFromCartAction(productId: number, section: CartSections) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId,
      section,
    }
  } as const;
};


export function updateProductInCartAction(productDataToUpdate: Partial<CartItems>, productId: number, section: CartSections) {
  return{
    type: ActionTypes.UPDATE_PRODUCT_IN_CART,
    payload: {
      productDataToUpdate,
      productId,
      section,
    }
  } as const;
};


export function getProductInCartAction(product: CoffeeCartProps) {
  return{
    type: ActionTypes.GET_PRODUCT_IN_CART,
    payload: {
      product,
    } 
  } as const;
};


export type ActionTypesDescribed =
  | { type: ActionTypes.ADD_PRODUCT_IN_CART, payload: { product: CoffeeCartProps, section: CartSections } }
  | { type: ActionTypes.REMOVE_PRODUCT_FROM_CART, payload: { section: CartSections, productId: number }} 
  | { type: ActionTypes.UPDATE_PRODUCT_IN_CART, payload: { productDataToUpdate: Partial<CartItems>, section: CartSections, productId: number} };