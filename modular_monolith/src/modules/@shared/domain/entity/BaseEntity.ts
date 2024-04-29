import { Id } from "../value-object/Id";
import { AggregateRoot } from "./AgreggateRoot";

export class BaseEntity implements AggregateRoot {
  private _id: Id;
  private _createdAt: Date;
  private _updatedAt: Date;

  public get id(): Id {
    return this._id;
  }
  public get createdAt(): Date {
    return this._createdAt;
  }
  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public constructor(id = new Id()) {
    this._id = id;
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }
}
