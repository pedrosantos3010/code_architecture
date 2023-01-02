import { ProductInterface } from "./ProductInterface";

export interface ProductServiceInterface {
  get(id: string): Promise<ProductInterface>;
  create(name: string, price: number): Promise<ProductInterface>;
  enable(product: ProductInterface): Promise<ProductInterface>;
  disable(product: ProductInterface): Promise<ProductInterface>;
}
