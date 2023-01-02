import { ProductReader } from "./ProductReader";
import { ProductWritter } from "./ProductWritter";

export interface ProductPersistenceInterface
  extends ProductWritter,
    ProductReader {}
