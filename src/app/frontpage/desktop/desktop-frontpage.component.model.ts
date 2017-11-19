import {SafeResourceUrl} from '@angular/platform-browser';

export class DesktopFrontpageComponentModel {

  public sliderItems: SafeResourceUrl[];

  constructor() {
    this.sliderItems = [];
  }

  public clone(): DesktopFrontpageComponentModel {
    let clonedModel: DesktopFrontpageComponentModel = new DesktopFrontpageComponentModel();

    clonedModel.sliderItems = Array.from(this.sliderItems);

    return clonedModel;
  }
}
