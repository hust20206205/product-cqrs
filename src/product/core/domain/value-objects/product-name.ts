export class ProductName {
  constructor(readonly value: string) {}

  validate() {
    return this.value.length > 5;
  }
}
