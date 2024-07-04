import { AddProductFacadeInputDTO } from "./AddPoductFacadeInputDTO";
import { CheckStockFacadeInputDTO } from "./CheckStockFacadeInputDTO";
import { CheckStockFacadeOutputDTO } from "./CheckStockFacadeOutputDTO";

export interface ProductAdmFacadeInterface {
  addProduct(input: AddProductFacadeInputDTO): Promise<void>;
  checkStock(
    input: CheckStockFacadeInputDTO
  ): Promise<CheckStockFacadeOutputDTO>;
}
