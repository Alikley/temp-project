import { Action } from "redux";

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    INCREASE_CART_QUANTITY = 'INCREASE_CART_QUANTITY',
    DECREASE_CART_QUANTITY = 'DECREASE_CART_QUANTITY',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART'
  }
  interface AddToCartAction extends Action {
    payload: number;
  }
  interface IncreaseCartQuantityAction extends Action {
    payload: number;
  }
  interface DecreaseCartQuantityAction extends Action {
    payload: number;
  }
  interface RemoveFromCartAction extends Action {
    payload: number;
  }

  export type CartAction =
    | AddToCartAction
    | IncreaseCartQuantityAction
    | DecreaseCartQuantityAction
    | RemoveFromCartAction;
    
   export const addToCart = (productId: number): AddToCartAction => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: productId
  });

  export const increaseCartQuantity = (productId: number): IncreaseCartQuantityAction => ({
    type: CartActionTypes.INCREASE_CART_QUANTITY,
    payload: productId
  });

  export const decreaseCartQuantity = (productId: number): DecreaseCartQuantityAction => ({
    type: CartActionTypes.DECREASE_CART_QUANTITY,
    payload: productId
  });

  export const removeFromCart = (productId: number): RemoveFromCartAction => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: productId
  });