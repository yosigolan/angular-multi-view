export class Product {

  public id: string;
  public title: string;
  public description: string;

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
  }

  public clone(): Product {
    let clonedModel: Product = new Product();

    clonedModel.id = this.id;
    clonedModel.title = this.title;
    clonedModel.description = this.description;

    return clonedModel;
  }
}
