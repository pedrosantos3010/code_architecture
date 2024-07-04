import { PrismaClient } from "@prisma/client";
import { Product } from "@product-adm/domain/Product";
import { ProductGateway } from "@product-adm/gateway/ProductGateway";
import { EntityNotFoundError } from "@shared/domain/errors/EntityNotFoundError";
import { Id } from "@shared/domain/value-object/Id";

export class ProductRepository implements ProductGateway {
  public constructor(private _client: PrismaClient) {}

  public async add(product: Product): Promise<void> {
    await this._client.product.create({
      data: {
        id: product.id.id,
        name: product.name,
        description: product.description,
        purchase_price: product.purchasePrice,
        stock: product.stock,
      },
    });
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
      productModel.stock,
      new Id(productModel.id),
      productModel.created_at,
      productModel.updated_at
    );
  }
}
