

import { HomepageItem } from '../homepage-item';

export class DesktopFrontpageComponentModel {

  public sliderItems: HomepageItem[];

  constructor() {
    this.sliderItems = [];
  }

  public clone(): DesktopFrontpageComponentModel {
    let clonedModel: DesktopFrontpageComponentModel = new DesktopFrontpageComponentModel();

    clonedModel.sliderItems = Array.from(this.sliderItems);

    return clonedModel;
  }
}
