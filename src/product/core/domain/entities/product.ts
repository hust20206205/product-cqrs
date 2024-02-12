import { ProductName } from "../value-objects/product-name";
// AR
export class Product {
  public name: ProductName;
  public createdAt: Date;
  constructor(public productId: string) {}
}
