import { ProductName } from '../value-objects/product-name';
import { AggregateRoot } from './aggregate-root';

export class Product extends AggregateRoot<string> {
  name: ProductName;
  createdAt: Date;
  constructor(id: string) {
    super(id);
  }
}
export class Builder {
  // private name: ProductName = undefined;
  // private createdAt: Date = undefined;

  // private constructor(){}

  // public static creer(): Builder { 
  // return new Builder();
  // }

  // public static creerDepuisExistant( existant :): Builder { 
  // let builder = new Builder();
  // builder.name = existant.name
  // builder.createdAt = existant.createdAt
  // return builder;
  // }

  // public build():  {
  // return {
  // "name": this.name,
  // "createdAt": this.createdAt,
  // }
  // }

  // public avecName(v: ProductName): Builder {
  // this.name= v; //COMMENT INSTANCIER UN NOUVEAU 
  // return this;
  // }

  // public avecCreatedAt(v: Date): Builder {
  // this.createdAt= v; //COMMENT INSTANCIER UN NOUVEAU 
  // return this;
  // }

}
const :  = null; //TODO
 