import { ProductRepository } from "@store-catalog/repository/ProductRepository";
import { StoreCatalogFacade } from "./StoreCatalogFacade";
import { StoreCatalogFacadeInterface } from "./StoreCatalogFacadeInterface";
import { FindAllProductsUseCase } from "@store-catalog/use-case/find-all-products/FindAllProductsUseCase";
import { FindProductUseCase } from "@store-catalog/use-case/find-product/FindProductUseCase";
import { PrismaClient } from "@prisma/client";

export class StoreCatalogFacadeFactory {

    public static create(): StoreCatalogFacadeInterface {
        const productRepository = new ProductRepository(new PrismaClient());

        return new StoreCatalogFacade(
            new FindProductUseCase(productRepository),
            new FindAllProductsUseCase(productRepository)
        )
    }
}
