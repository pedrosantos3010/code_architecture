import { ProductInterface } from "./ProductInterface";

export interface ProductReader {
  save(product: ProductInterface): Promise<ProductInterface>;
}
