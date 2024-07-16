export interface FindAllStoreCatalogOutputDTO {
    products: Array<{
        id: string;
        name: string;
        description: string;
        salesPrice: number;
    }>;
}
