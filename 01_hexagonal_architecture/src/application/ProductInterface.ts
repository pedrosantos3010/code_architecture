interface ProductInterface {
  isValid(): boolean;
  enable(): void;
  disable(): void;

  readonly id: string;
  readonly name: string;
  readonly status: string;
  readonly price: number;
}
