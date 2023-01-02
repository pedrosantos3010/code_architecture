import { ProductInterface } from "./ProductInterface";

export interface ProductWritter {
  get(id: string): Promise<ProductInterface>;
}
