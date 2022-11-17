import { IProduct } from "./ProductInterface";

export interface IProductInCart extends IProduct {
  quantity?: number
}
