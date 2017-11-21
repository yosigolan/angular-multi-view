import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MobileFrontpageComponentModel} from './mobile-frontpage.component.model';
import {DomSanitizer} from '@angular/platform-browser';
import { HomepageItem } from '../homepage-item';

@Component({
  selector: 'app-mobile-frontpage',
  templateUrl: './mobile-frontpage.component.html',
  styleUrls: ['./mobile-frontpage.component.scss']
})
export class MobileFrontpageComponent implements OnInit, AfterViewInit {

  public myViewModel: MobileFrontpageComponentModel;
  private model: MobileFrontpageComponentModel;

  constructor(private sanitizer: DomSanitizer) {
    this.model = new MobileFrontpageComponentModel();
    this.myViewModel = new MobileFrontpageComponentModel();
  }

  public ngOnInit(): void {
    this.updateImageUrls();

    this.updateView();
  }

  public ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  private updateView(): void {
    this.myViewModel = this.model.clone();
  }

  private updateImageUrls(): void {
    let imagesUrls: string[] = [];

    imagesUrls.push(
      '../../../assets/images/front-page/xbox.jpg',
      '../../../assets/images/front-page/iphone.jpg',
      '../../../assets/images/front-page/ipad.jpg',
      '../../../assets/images/front-page/hoverboard.jpg',
      '../../../assets/images/front-page/banana-guard.jpg'
    );

    imagesUrls.forEach((imageUrl: string, index: number) => {
      let homepageItem: HomepageItem = new HomepageItem();
      let productName: string = '';

      if (index % 2) {
        productName = 'chair';
      } else {
        productName = 'funnel';
      }

      homepageItem.imageSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
      homepageItem.productName = productName;

      this.model.sliderItems.push(homepageItem);
    });
  }
}
