import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DesktopFrontpageComponentModel} from './desktop-frontpage.component.model';
import {DomSanitizer} from '@angular/platform-browser';
import {HomepageItems} from '../slider-item';

@Component({
  selector: 'app-desktop-frontpage',
  templateUrl: './desktop-frontpage.component.html',
  styleUrls: ['./desktop-frontpage.component.scss']
})
export class DesktopFrontpageComponent implements OnInit, AfterViewInit {

  private model: DesktopFrontpageComponentModel;
  public myViewModel: DesktopFrontpageComponentModel;

  @ViewChild('slider') public slider: ElementRef;

  constructor(private sanitizer: DomSanitizer) {
    this.model = new DesktopFrontpageComponentModel();
    this.myViewModel = new DesktopFrontpageComponentModel();
  }

  public ngOnInit(): void {
    this.updateImageUrls();

    this.updateView();
  }

  public ngAfterViewInit(): void {
    this.initFlipster();
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
      let homepageItem: HomepageItems = new HomepageItems();
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

  private initFlipster(): void {
    (<any>window).jQuery(this.slider.nativeElement).flipster({
      style: 'flat',
      scrollwheel: true,
      loop: true,
      spacing: -0.35,
      buttons: true
    });
  }
}

