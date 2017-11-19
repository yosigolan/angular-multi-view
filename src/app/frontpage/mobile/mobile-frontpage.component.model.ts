import {HomepageItems} from '../slider-item';

export class MobileFrontpageComponentModel {

  public sliderItems: HomepageItems[];

  constructor() {
    this.sliderItems = [];
  }

  public clone(): MobileFrontpageComponentModel {
    let clonedModel: MobileFrontpageComponentModel = new MobileFrontpageComponentModel();

    clonedModel.sliderItems = Array.from(this.sliderItems);

    return clonedModel;
  }
}
