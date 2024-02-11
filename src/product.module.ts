import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductApplications } from "./product/application/product.application";
import { ProductInfrastructure } from "./product/infrastructure/product.infrastructure";
import { ProductInterface } from "./product/interface/product.interface";

@Module({
  imports: [TypeOrmModule.forFeature([...ProductInfrastructure.repositories]), CqrsModule],
  providers: [...ProductInterface.resolvers, ...ProductInfrastructure.providers, ...ProductApplications],
  controllers: [...ProductInterface.controllers],
  exports: [],
})
export class ProductModule {}

