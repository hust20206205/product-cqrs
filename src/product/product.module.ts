import { Module } from '@nestjs/common';
import { ProductService } from './temp/product.service';
import { ProductController } from './temp/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './temp/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
