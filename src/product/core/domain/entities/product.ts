import { ProductName } from '../value-objects/product-name';
import { AggregateRoot } from './aggregate-root';

export class Product extends AggregateRoot<string> {
  name: ProductName;
  createdAt: Date;
  constructor(id: string) {
    super(id);
  }
}

export class Builder {
  private name: ProductName | undefined;
  private createdAt: Date | undefined;

  constructor() {}

  public static create(): Builder { 
    return new Builder();
  }

  public withName(v: ProductName): Builder {
    this.name = v;
    return this;
  }

  public withCreatedAt(v: Date): Builder {
    this.createdAt = v;
    return this;
  }

  public build(): Product {
    if (!this.name || !this.createdAt) {
      throw new Error('Name and createdAt are required to build Product');
    }
    const product = new Product('someId'); // Provide an appropriate id here
    product.name = this.name;
    product.createdAt = this.createdAt;
    return product;
  }
}

// Usage
const builder = Builder.create();
const productName = new ProductName('Some Product');
const createdAt = new Date();
const product = builder.withName(productName).withCreatedAt(createdAt).build();
console.log(product);
