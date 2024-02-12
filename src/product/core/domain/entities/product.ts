import { ProductName } from '../value-objects/product-name';
import { AggregateRoot } from './aggregate-root';

export class Product extends AggregateRoot<string> {
  name: ProductName;
  createdAt: Date;
  constructor(id: string) {
    super(id);
  }
}
