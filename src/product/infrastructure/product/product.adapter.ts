import { Injectable } from '@nestjs/common';
import { Product } from '../../core/domain/product/product.entity';
import { ProductRepository } from './product.repository';

interface ProductAdapterInterface {}

@Injectable()
export class ProductAdapter implements ProductAdapterInterface {
  constructor(private readonly productRepository: ProductRepository) {}
}