import { Name } from "../value-objects/product-name";
// AR
export class Product {
  public name: Name;
  public createdAt: Date;
  constructor(public productId: string) {}
}
