import { Id } from "@shared/domain/value-object/Id";
import { Product } from "@product-adm/domain/Product";
import { ProductGateway } from "@product-adm/gateway/ProductGateway";
import { AddProductInputDTO } from "./AddProductInputDTO";
import { AddProductOutputDTO } from "./AddProductOutputDTO";

export class AddProductUseCase {
  public constructor(private _productRepository: ProductGateway) {}

  public async execute(
    input: AddProductInputDTO
  ): Promise<AddProductOutputDTO> {
    const product = new Product(
      input.name,
      input.description,
      input.purchasePrice,
      input.stock,
      new Id()
    );

    await this._productRepository.add(product);

    return {
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }
}
