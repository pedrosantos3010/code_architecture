export class EntityNotFoundError extends Error {
  public constructor(entityName: string) {
    super(`Entity not found: ${entityName}`);
    this.name = `EntityNotFoundError${entityName}`;
  }
}
