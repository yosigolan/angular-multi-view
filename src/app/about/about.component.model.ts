
export class AboutComponentModel {

  public title: string;

  constructor() {
    this.title = '';
  }

  public clone(): AboutComponentModel {
    let model: AboutComponentModel = new AboutComponentModel();
    model.title = this.title;

    return model;
  }
}
