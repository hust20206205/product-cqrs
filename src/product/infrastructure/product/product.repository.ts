import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../../core/domain/entities/product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {}
