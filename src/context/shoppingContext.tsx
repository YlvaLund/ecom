import { createContext } from "react";
import { Product } from "../models/models";

interface Products {
  [index: number]: Product;
}

export interface ShoppingContextType {
  username: string;
  cart: Products;
  addProduct: Function;
  removeProduct: Function;
}

export const ShoppingContext = createContext<ShoppingContextType | null>(null);
