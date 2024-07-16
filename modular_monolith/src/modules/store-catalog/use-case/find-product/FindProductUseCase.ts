import { ProductGateway } from "@store-catalog/gateway/ProductGateway";
import { FindProductOutputDTO } from "./FindProductOutputDTO";

export class FindProductUseCase {
  public constructor(private _productRepository: ProductGateway) {}

  public async execute(id: string): Promise<FindProductOutputDTO> {
    const product = await this._productRepository.find(id);

    return {
        id: product.id.id,
        name: product.name,
        salesPrice: product.salesPrice,
        description: product.description
    }
  }
}
