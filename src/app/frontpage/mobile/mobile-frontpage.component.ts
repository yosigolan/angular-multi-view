import {Component, OnInit} from '@angular/core';
import {MobileFrontpageComponentModel} from './mobile-frontpage.component.model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-mobile-frontpage',
  templateUrl: './mobile-frontpage.component.html',
  styleUrls: ['./mobile-frontpage.component.scss']
})
export class MobileFrontpageComponent implements OnInit {

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
      let sanitizedImageUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
      this.model.sanitizedImageUrls.push(sanitizedImageUrl);
    });
  }
}
