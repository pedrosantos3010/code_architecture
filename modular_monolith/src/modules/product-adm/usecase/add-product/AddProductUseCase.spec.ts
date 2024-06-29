import { Product } from "@product-adm/domain/Product";
import { AddProductUseCase } from "./AddProductUseCase";
import { Id } from "@shared/domain/value-object/Id";

describe("AddProductUseCase", () => {
  it("should be able to add a product", async () => {
    const mockProductRepository = {
      add: jest.fn(),
      find: jest.fn(),
    };

    const sut = new AddProductUseCase(mockProductRepository);

    const product = {
      name: "Product 1",
      description: "Product 1 description",
      purchasePrice: 100,
      stock: 10,
    };
    const productOutput = await sut.execute(product);

    expect(mockProductRepository.add).toHaveBeenCalledWith(
      new Product(
        "Product 1",
        "Product 1 description",
        100,
        10,
        expect.any(Id),
        expect.any(Date),
        expect.any(Date)
      )
    );

    expect(productOutput.id).toBeDefined();
    expect(productOutput.name).toBe(product.name);
    expect(productOutput.description).toBe(product.description);
    expect(productOutput.purchasePrice).toBe(product.purchasePrice);
    expect(productOutput.stock).toBe(product.stock);
    expect(productOutput.createdAt).toBeDefined();
    expect(productOutput.updatedAt).toBeDefined();
  });
});
