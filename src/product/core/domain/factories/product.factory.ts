import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Name } from '../value-objects/name';
import { Product } from '../entities/product';

@Injectable()
export class   ProductFactory {
  create(
    name: Name,
    createdAt: Date,
  ) {
    const productId = randomUUID();
    const product = new Product(productId);

    product.name = name;
    product.createdAt = createdAt;

    return product;
  }
}
