import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ProductName } from '../value-objects/product-name';
import { Product } from '../entities/product';

@Injectable()
export class   ProductFactory {
  create(
    name: ProductName,
    createdAt: Date,
  ) {
    const productId = randomUUID();
    const product = new Product(productId);

    product.name = name;
    product.createdAt = createdAt;

    return product;
  }
}
