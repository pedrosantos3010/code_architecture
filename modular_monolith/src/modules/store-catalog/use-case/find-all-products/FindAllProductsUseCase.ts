import { ProductGateway } from "@store-catalog/gateway/ProductGateway";
import { FindAllProductsOutputDTO } from "./FindAllProductsOutputDTO";

export class FindAllProductsUseCase {
    public constructor(private _productRepository: ProductGateway) { }

    public async execute(): Promise<FindAllProductsOutputDTO> {
        const products = await this._productRepository.findAll();

        return {
            products: products.map(p => ({
                id: p.id.id,
                name: p.name,
                description: p.description,
                salesPrice: p.salesPrice
            }))
        }
    }
}
