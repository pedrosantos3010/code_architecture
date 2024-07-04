import { AddProductUseCase } from "@product-adm/usecase/add-product/AddProductUseCase";
import { ProductAdmFacadeInterface } from "./ProductAdmFacadeInterface";
import { AddProductFacadeInputDTO } from "./AddPoductFacadeInputDTO";
import { CheckStockFacadeInputDTO } from "./CheckStockFacadeInputDTO";
import { CheckStockFacadeOutputDTO } from "./CheckStockFacadeOutputDTO";

export class ProductAdmFacade implements ProductAdmFacadeInterface {
  public constructor(private _addProductUseCase: AddProductUseCase) {}

  public async addProduct(input: AddProductFacadeInputDTO): Promise<void> {
    await this._addProductUseCase.execute(input);
  }

  public async checkStock(
    input: CheckStockFacadeInputDTO
  ): Promise<CheckStockFacadeOutputDTO> {
    throw new Error("Method not implemented.");
  }
}
