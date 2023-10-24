import { Reducer } from 'redux';
import { CartAction, CartActionTypes } from '../action/Action';

interface CartItem {
    id: number;
    quantity: number;
  }

type CartState = CartItem[];

const initialState: CartState = [];


const cartReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
      case CartActionTypes.ADD_TO_CART:
        return [...state, { id: action.payload, quantity: 1 }];
      case CartActionTypes.INCREASE_CART_QUANTITY:
        return state.map((item: CartItem) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        );
      case CartActionTypes.DECREASE_CART_QUANTITY:
        return state
          .map((item: CartItem) =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item: CartItem) => item.quantity > 0);
      case CartActionTypes.REMOVE_FROM_CART:
        return state.filter((item: CartItem) => item.id !== action.payload);
      default:
        return state;
    }
  };

  export default cartReducer;