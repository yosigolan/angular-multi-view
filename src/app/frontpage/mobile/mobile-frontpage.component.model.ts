import {SafeResourceUrl} from '@angular/platform-browser';

export class MobileFrontpageComponentModel {

  public sanitizedImageUrls: SafeResourceUrl[];

  constructor() {
    this.sanitizedImageUrls = [];
  }

  public clone(): MobileFrontpageComponentModel {
    let clonedModel: MobileFrontpageComponentModel = new MobileFrontpageComponentModel();

    clonedModel.sanitizedImageUrls = Array.from(this.sanitizedImageUrls);

    return clonedModel;
  }
}
