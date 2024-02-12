// import { ICommand } from "@nestjs/cqrs";

import { ProductName } from '../../../domain/value-objects/product-name';

// export class CreateProductCommand implements ICommand {
export class CreateProductCommand {
  constructor(public readonly name: ProductName) {}
}
