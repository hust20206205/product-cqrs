import { Module } from '@nestjs/common';
import { ProductService } from './core/product.service';
import { ProductController } from './interface/controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../tam/product.entity';

@Module({
  // TypeOrmModule.forFeature([...ProductInfrastructure.repositories]),
  // CqrsModule,
  imports: [TypeOrmModule.forFeature([Product])],
  // controllers: [...ProductInterface.controllers],
  controllers: [ProductController],
  providers: [ProductService],
  // ...ProductInterface.resolvers,
  // ...ProductInfrastructure.providers,
  // ...ProductApplications,
  exports: [],
})
export class ProductModule {}
