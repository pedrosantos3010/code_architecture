import { ProductGateway } from "@product-adm/gateway/ProductGateway";
import { CheckStockInputDTO } from "./CheckStockInputDTO";
import { CheckStockOutputDTO } from "./CheckStockOutputDTO";

export class CheckStockUseCase {
  public constructor(private productRepository: ProductGateway) {}

  public async execute(
    input: CheckStockInputDTO
  ): Promise<CheckStockOutputDTO> {
    const product = await this.productRepository.find(input.productId);

    return {
      productId: product.id.id,
      stock: product.stock,
    };
  }
}
