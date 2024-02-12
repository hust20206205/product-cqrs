export class ProductName {
  constructor(readonly value: string) {}

  validate() {
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(this.value)) {
      throw new Error('Tên chỉ có thể chứa chữ cái và số.');
    }
  }
}
