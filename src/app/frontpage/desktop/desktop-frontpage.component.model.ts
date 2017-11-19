import {HomepageItems} from '../slider-item';

export class DesktopFrontpageComponentModel {

  public sliderItems: HomepageItems[];

  constructor() {
    this.sliderItems = [];
  }

  public clone(): DesktopFrontpageComponentModel {
    let clonedModel: DesktopFrontpageComponentModel = new DesktopFrontpageComponentModel();

    clonedModel.sliderItems = Array.from(this.sliderItems);

    return clonedModel;
  }
}
