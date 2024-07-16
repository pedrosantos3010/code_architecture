import { PrismaClient } from "@prisma/client";
import { EntityNotFoundError } from "@shared/domain/errors/EntityNotFoundError";
import { Id } from "@shared/domain/value-object/Id";
import { Product } from "@store-catalog/domain/Product";
import { ProductGateway } from "@store-catalog/gateway/ProductGateway";

export class ProductRepository implements ProductGateway {
  public constructor(private _client: PrismaClient) {}
  public async findAll(): Promise<Product[]> {
    const productModels = await this._client.product.findMany();

    return productModels.map(
      (productModel) =>
        new Product(
          productModel.name,
          productModel.description,
          productModel.purchase_price.toNumber(),
          new Id(productModel.id),
          productModel.created_at,
          productModel.updated_at
        )
    );
  }

  public async find(id: string): Promise<Product> {
    const productModel = await this._client.product.findFirst({
      where: { id: id },
    });

    if (!productModel) {
      throw new EntityNotFoundError("Product");
    }

    return new Product(
      productModel.name,
      productModel.description,
      productModel.purchase_price.toNumber(),
      new Id(productModel.id),
      productModel.created_at,
      productModel.updated_at
    );
  }
}
