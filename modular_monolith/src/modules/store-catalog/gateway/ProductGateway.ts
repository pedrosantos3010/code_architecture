import { Product } from "../domain/Product";

export interface ProductGateway {
  findAll(): Promise<Product[]>;
  find(id: string): Promise<Product>;
}
