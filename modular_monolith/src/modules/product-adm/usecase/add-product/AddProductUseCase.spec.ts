import { AddProductUseCase } from "./AddProductUseCase";

describe("AddProductUseCase", () => {
  it("should be able to add a product", async () => {
    const productRepository = {
      add: jest.fn(),
      find: jest.fn(),
    };

    const sut = new AddProductUseCase(productRepository);

    const product = {
      name: "Product 1",
      description: "Product 1 description",
      purchasePrice: 100,
      stock: 10,
    };
    const productOutput = await sut.execute(product);

    expect(productRepository.add).toHaveBeenCalledWith({
      _id: { _id: expect.any(String) },
      _name: product.name,
      _description: product.description,
      _purchasePrice: product.purchasePrice,
      _stock: product.stock,
      _createdAt: expect.any(Date),
      _updatedAt: expect.any(Date),
    });

    expect(productOutput.id).toBeDefined();
    expect(productOutput.name).toBe(product.name);
    expect(productOutput.description).toBe(product.description);
    expect(productOutput.purchasePrice).toBe(product.purchasePrice);
    expect(productOutput.stock).toBe(product.stock);
    expect(productOutput.createdAt).toBeDefined();
    expect(productOutput.updatedAt).toBeDefined();
  });
});
