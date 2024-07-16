import { FindProductUseCase } from "@store-catalog/use-case/find-product/FindProductUseCase";
import { FindAllStoreCatalogOutputDTO } from "./FindAllProductsOutputDTO";
import { FindStoreCatalogOutputDTO } from "./FindStoreCatalogOutputDTO";
import { FindAllProductsUseCase } from "@store-catalog/use-case/find-all-products/FindAllProductsUseCase";


export class StoreCatalogFacade {
    public constructor(
        private _findStoreCatalogUseCase: FindProductUseCase,
        private _findAllStoreCatalogUseCase: FindAllProductsUseCase
    ) {}

    public async findAll(): Promise<FindAllStoreCatalogOutputDTO> {
        return await this._findAllStoreCatalogUseCase.execute();
    }

    public async find(id: string): Promise<FindStoreCatalogOutputDTO> {
        return await this._findStoreCatalogUseCase.execute(id);
    }
}
