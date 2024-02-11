import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../../core/domain/product/product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {}
