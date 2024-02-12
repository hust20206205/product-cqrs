import { ProductName } from '../value-objects/product-name';
import { AggregateRoot } from './aggregate-root';

export class Product extends AggregateRoot<string> {
  constructor(id: string) {
    super(id);
    name: ProductName;
    createdAt: Date;
  }
}
