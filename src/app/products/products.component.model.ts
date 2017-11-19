import {Product} from './product/product';

export class ProductsComponentModel {

  public products: Product[];

  constructor() {
    this.products = [];
  }

  public clone(): ProductsComponentModel {
    let clonedModel: ProductsComponentModel = new ProductsComponentModel();

    clonedModel.products = Array.from(this.products);

    return clonedModel;
  }
}
