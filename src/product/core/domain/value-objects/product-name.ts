import { ProductException } from '../exceptions/product.exception';

export class ProductName {
  constructor(readonly value: string) {
    this.validate()
  }

  validate() {
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(this.value)) {
      throw new ProductException('Tên chỉ có thể chứa chữ cái và số.');
    }
  }
}
