import { subtle } from "crypto";
import { Product } from "../Product";
import { ProductStatus } from "../ProductStatus";

describe("Product", () => {
  describe("when trying to enable", () => {
    it("should be able to enable with price greater than zero", () => {
      const product = new Product(
        "id",
        "Product example",
        ProductStatus.DISABLED,
        10
      );

      product.enable();

      expect(product.status).toBe(ProductStatus.ENABLED);
    });

    it("should throw if the price is not greater than zero", () => {
      const product = new Product(
        "id",
        "Product example",
        ProductStatus.DISABLED,
        0
      );

      expect(() => product.enable()).toThrowError(
        "The price mus be greater than zero to enable the product"
      );
    });

    it("should throw if the product is already enabled", () => {
      const product = new Product(
        "id",
        "Product example",
        ProductStatus.ENABLED,
        10
      );

      expect(() => product.enable()).toThrowError(
        "You can't enable a product that is already enabled"
      );
    });
  });
});
