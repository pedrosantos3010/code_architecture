import { AggregateRoot } from "../../@shared/domain/entity/AgreggateRoot";
import { BaseEntity } from "../../@shared/domain/entity/BaseEntity";
import { Id } from "../../@shared/domain/value-object/Id";

export class Product extends BaseEntity implements AggregateRoot {
  public constructor(
    private _name: string,
    private _description: string,
    private _purchasePrice: number,
    private _stock: number,
    id?: Id,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(id);
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get purchasePrice(): number {
    return this._purchasePrice;
  }

  public get stock(): number {
    return this._stock;
  }

  public set stock(stock: number) {
    this._stock = stock;
  }

  public set description(description: string) {
    this._description = description;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set purchasePrice(purchasePrice: number) {
    this._purchasePrice = purchasePrice;
  }
}
