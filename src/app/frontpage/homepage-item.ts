import {SafeResourceUrl} from '@angular/platform-browser';

export class HomepageItem {

  public imageSafeUrl: SafeResourceUrl;
  public productName: string;

  constructor() {
    this.imageSafeUrl = '';
    this.productName = '';
  }
}
