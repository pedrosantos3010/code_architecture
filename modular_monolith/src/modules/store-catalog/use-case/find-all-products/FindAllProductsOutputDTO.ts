export interface FindAllProductsOutputDTO {
    products: Array<{
        id: string;
        name: string;
        description: string;
        salesPrice: number;
    }>;
}
