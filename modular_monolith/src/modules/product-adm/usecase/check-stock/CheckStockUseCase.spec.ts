import { Product } from "@product-adm/domain/Product";
import { CheckStockUseCase } from "./CheckStockUseCase";
import { Id } from "@shared/domain/value-object/Id";

describe("CheckStockUseCase", () => {
  it("should be able to check stock", async () => {
    const mockProductRepository = {
      add: jest.fn(),
      find: jest.fn(),
    };
    const sut = new CheckStockUseCase(mockProductRepository);

    const productMock = new Product(
      "Product 1",
      "Product 1 description",
      100,
      10,
      new Id("1"),
      new Date(),
      new Date()
    );

    mockProductRepository.find.mockResolvedValue(productMock);

    const productOutput = await sut.execute({
      productId: "1",
    });

    expect(productOutput).toEqual({
      productId: "1",
      stock: 10,
    });
  });
});
