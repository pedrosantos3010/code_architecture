import { AggregateRoot } from "@shared/domain/entity/AgreggateRoot";
import { BaseEntity } from "@shared/domain/entity/BaseEntity";
import { Id } from "@shared/domain/value-object/Id";

export class Product extends BaseEntity implements AggregateRoot {
  public constructor(
    private _name: string,
    private _description: string,
    private _salesPrice: number,
    id?: Id,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(id, createdAt, updatedAt);
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get salesPrice(): number {
    return this._salesPrice;
  }
}
