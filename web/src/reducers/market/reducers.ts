import { produce,  } from "immer";

import { ActionTypes, ActionTypesDescribed } from "./actions";
import { CoffeeDatabaseProps } from "../../database/test/database";
import { TagColors } from "../../components/Tag/styles";


export interface CoffeeCartProps { //Lembrar de exportar depois
  id: number;
  section: "coffees";
  imageSrc: string;
  imageAlt: string;
  price: number;
  tagsTitle: [string, string?, string?];
  tagsColor: TagColors;
  title: string;
  description: string;
}

export type CartSections = "coffees";

export interface CoffeeCartProps extends CoffeeDatabaseProps {
  quantity: number;
};

export type CartItems = CoffeeCartProps;

export interface CartState {
  coffees: CartItems[];
}; 


export function marketReducer(state: CartState, action: ActionTypesDescribed) {

  switch(action.type) {
    
    case ActionTypes.ADD_PRODUCT_IN_CART : {
      return produce(state, draft => {

        draft[action.payload.section].push(action.payload.product);
      })
    }

    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      return produce(state, draft => {

        const index = draft[action.payload.section].findIndex(product => product.id === action.payload.productId);
        

        if(index !== -1) {
          draft[action.payload.section].splice(index, 1)
        };
      }) 
    }

    case ActionTypes.UPDATE_PRODUCT_IN_CART: {
      return produce(state, draft => {
        const index = draft[action.payload.section].findIndex(product => product.id === action.payload.productId);
    
        if (index !== -1) {
          const productFromCart = draft[action.payload.section][index];
    
          draft[action.payload.section][index] = {
            ...productFromCart,
            ...action.payload.productDataToUpdate,
          };
        }
  
        return draft;
      });
    }
    default: return state
  }
}