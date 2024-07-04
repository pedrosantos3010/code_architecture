import { AddProductUseCase } from "@product-adm/usecase/add-product/AddProductUseCase";
import { ProductAdmFacade } from "./ProductAdmFacade";
import { ProductAdmFacadeInterface } from "./ProductAdmFacadeInterface";
import { ProductRepository } from "@product-adm/repository/ProductRepository";
import { PrismaClient } from "@prisma/client";

export class ProductAdmFacadeFactory {
  public static create(): ProductAdmFacadeInterface {
    const productRepository = new ProductRepository(new PrismaClient());
    return new ProductAdmFacade(new AddProductUseCase(productRepository));
  }
}
