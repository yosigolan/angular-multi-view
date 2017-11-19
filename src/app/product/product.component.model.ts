import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

export class ProductComponentModel {

  public name: string;
  public description: string;
  public imageUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.name = '';
    this.description = '';
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  public clone(): ProductComponentModel {
    let clonedModel: ProductComponentModel = new ProductComponentModel(this.sanitizer);

    clonedModel.name = this.name;
    clonedModel.description = this.description;
    clonedModel.imageUrl = this.imageUrl;

    return clonedModel;
  }
}
