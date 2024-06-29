import { Id } from "../value-object/Id";
import { AggregateRoot } from "./AgreggateRoot";

export class BaseEntity implements AggregateRoot {
  public get id(): Id {
    return this._id;
  }
  public get createdAt(): Date {
    return this._createdAt;
  }
  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public constructor(
    private _id = new Id(),
    private _createdAt = new Date(),
    private _updatedAt = new Date()
  ) {}
}
