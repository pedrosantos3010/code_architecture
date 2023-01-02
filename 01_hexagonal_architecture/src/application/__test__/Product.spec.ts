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

  describe("when trying to disable", () => {
    it("should be able to disable if the price is zero", () => {
      const product = new Product(
        "id",
        "Product example",
        ProductStatus.ENABLED,
        0
      );

      product.disable();
      expect(product.status).toBe(ProductStatus.DISABLED);
    });

    it("should throw if the price is not zero", () => {
      const product = new Product(
        "id",
        "Product example",
        ProductStatus.ENABLED,
        10
      );

      expect(() => product.disable()).toThrowError(
        "The price must be zero in order to have the product disabled"
      );
    });
  });
});
