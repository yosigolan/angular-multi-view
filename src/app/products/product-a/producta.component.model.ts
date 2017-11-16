
export class ProductAComponentModel {

  public title: string;


  constructor() {
    this.title = '';
  }

  public clone(): ProductAComponentModel {
    let model: ProductAComponentModel = new ProductAComponentModel();
    model.title = this.title;

    return model;
  }
}
