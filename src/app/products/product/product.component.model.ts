import {Product} from './product';

export class ProductComponentModel {

  public product: Product;

  constructor() {
    this.product = new Product();
  }

  public clone(): ProductComponentModel {
    let clonedModel: ProductComponentModel = new ProductComponentModel();

    clonedModel.product = this.product.clone();

    return clonedModel;
  }
}
