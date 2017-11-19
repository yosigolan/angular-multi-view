import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DesktopFrontpageComponentModel} from './desktop-frontpage.component.model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

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

    imagesUrls.push('../../../assets/images/front-page/TripKind_Art_and_ museums.jpg');
    imagesUrls.push('../../../assets/images/front-page/TripKind_Gastronomy.jpg');
    imagesUrls.push('../../../assets/images/front-page/Tripkind_NightLife.jpg');
    imagesUrls.push('../../../assets/images/front-page/TripKind_Sightseeing.jpg');
    imagesUrls.push('../../../assets/images/front-page/TripKinf_With_kids.jpg');

    imagesUrls.forEach((imageUrl: string) => {
      let sanitizedImageUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
      this.model.sliderItems.push(sanitizedImageUrl);
    });
  }

  private initFlipster(): void {
    (<any>window).jQuery(this.slider.nativeElement).flipster({
      style: 'flat',
      scrollwheel: false,
      loop: true,
      spacing: -0.35
    });
  }
}

