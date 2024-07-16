import { FindAllStoreCatalogOutputDTO } from "./FindAllProductsOutputDTO";
import { FindStoreCatalogOutputDTO } from "./FindStoreCatalogOutputDTO";

export interface StoreCatalogFacadeInterface {
    findAll(): Promise<FindAllStoreCatalogOutputDTO>;
    find(id: string): Promise<FindStoreCatalogOutputDTO>;
}
