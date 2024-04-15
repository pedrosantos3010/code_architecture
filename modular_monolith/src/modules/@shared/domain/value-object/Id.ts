import { v4 as uuidv4 } from "uuid";
import { ValueObject } from "./ValueObject";

export class Id implements ValueObject {
  private _id: string;

  public get id(): string {
    return this._id;
  }

  public constructor(id?: string) {
    this._id = id || uuidv4();
  }
}
