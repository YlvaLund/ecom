import { createContext } from "react";
import { CartModel } from "../models/models";

export interface ShoppingContextType {
  username: string;
  addProduct: Function;
  removeProduct: Function;
  clearCart: Function;
  cart: CartModel;
}

export const ShoppingContext = createContext<ShoppingContextType>({
  username: "",
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
  cart: [],
});
