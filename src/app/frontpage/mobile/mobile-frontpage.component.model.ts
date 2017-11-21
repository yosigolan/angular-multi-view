
import { HomepageItem } from '../homepage-item';

export class MobileFrontpageComponentModel {

  public sliderItems: HomepageItem[];

  constructor() {
    this.sliderItems = [];
  }

  public clone(): MobileFrontpageComponentModel {
    let clonedModel: MobileFrontpageComponentModel = new MobileFrontpageComponentModel();

    clonedModel.sliderItems = Array.from(this.sliderItems);

    return clonedModel;
  }
}
