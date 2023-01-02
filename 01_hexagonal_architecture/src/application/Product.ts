import { ProductStatus } from "./ProductStatus";

export class Product implements ProductInterface {
  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get status(): ProductStatus {
    return this._status;
  }

  public get price(): number {
    return this._price;
  }

  public constructor(
    private _id: string,
    private _name: string,
    private _status: ProductStatus,
    private _price: number
  ) {}

  public isValid(): boolean {
    throw new Error("Method not implemented.");
  }

  public enable(): void {
    if (this._price <= 0) {
      throw new Error(
        "The price mus be greater than zero to enable the product"
      );
    }

    if (this._status === ProductStatus.ENABLED) {
      throw new Error("You can't enable a product that is already enabled");
    }

    this._status = ProductStatus.ENABLED;
  }

  public disable(): void {
    if (this.price != 0) {
      throw Error(
        "The price must be zero in order to have the product disabled"
      );
    }
    this._status = ProductStatus.DISABLED;
  }
}
