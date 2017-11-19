import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MobileFrontpageComponentModel} from './mobile-frontpage.component.model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {HomepageItems} from '../slider-item';

@Component({
  selector: 'app-mobile-frontpage',
  templateUrl: './mobile-frontpage.component.html',
  styleUrls: ['./mobile-frontpage.component.scss']
})
export class MobileFrontpageComponent implements OnInit, AfterViewInit {

  private model: MobileFrontpageComponentModel;
  public myViewModel: MobileFrontpageComponentModel;

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

    imagesUrls.push('../../../assets/images/front-page/TripKind_Art_and_ museums.jpg');
    imagesUrls.push('../../../assets/images/front-page/TripKind_Gastronomy.jpg');
    imagesUrls.push('../../../assets/images/front-page/Tripkind_NightLife.jpg');
    imagesUrls.push('../../../assets/images/front-page/TripKind_Sightseeing.jpg');
    imagesUrls.push('../../../assets/images/front-page/TripKinf_With_kids.jpg');

    imagesUrls.forEach((imageUrl: string) => {
      let sliderItem: HomepageItems = new HomepageItems();
      let randomNumber: number = Math.random();
      let productId: number = Math.round(randomNumber) + 1;

      sliderItem.imageSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
      sliderItem.productName = `product-${productId.toString()}`;

      this.model.sliderItems.push(sliderItem);
    });
  }
}
