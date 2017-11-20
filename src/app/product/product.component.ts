import {AfterViewInit, Component} from '@angular/core';
import {ProductComponentModel} from './product.component.model';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements AfterViewInit {

  private model: ProductComponentModel;
  public myViewModel: ProductComponentModel;

  public isMobileResolution: boolean;

  constructor(private router: Router,
    private sanitizer: DomSanitizer,
    private applicationStateService: ApplicationStateService) {
    this.isMobileResolution = applicationStateService.getIsMobileResolution();
    this.model = new ProductComponentModel(sanitizer);
    this.myViewModel = new ProductComponentModel(sanitizer);

    this.loadProduct();

    this.updateView();
  }

  public ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  private getProductNameParam(): string {
    let routeSnapshot: ActivatedRouteSnapshot = this.router.routerState.snapshot.root;
    // the trip title in the last tree node so we will find it
    while (routeSnapshot.firstChild !== null) {
      routeSnapshot = routeSnapshot.firstChild;
    }

    let tripTitle: string = routeSnapshot.params['productName'];

    return tripTitle;
  }


  private updateView(): void {
    this.myViewModel = this.model.clone();
  }

  private loadProduct(): void {
    if (this.getProductNameParam() === 'funnel') {
      this.model.name = 'Funnel';
      this.model.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus sem, consectetur consequat hendrerit in, volutpat sit amet lectus. Nullam sed pretium dolor. Nam sit amet bibendum nibh, ac hendrerit elit. Curabitur scelerisque placerat suscipit. Fusce vitae interdum lacus. Aliquam et massa arcu. Duis eget aliquet erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sagittis sed eros vehicula pulvinar. Nunc tempus nunc vitae magna sollicitudin tincidunt. Curabitur semper tincidunt lorem. Cras venenatis tincidunt arcu, id convallis urna aliquet quis. It putes the "fun" in funnel!';
      this.model.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/product-1.jpg');
    } else {
      this.model.name = 'Chair';
      this.model.description = 'Suspendisse potenti. Mauris volutpat massa id erat congue, ac ornare nisl dictum. Duis tincidunt ipsum tellus, ac consectetur metus fringilla sed. Suspendisse massa eros, lobortis nec tortor id, sollicitudin auctor ipsum. Vestibulum laoreet, erat sed porttitor sagittis, ex velit pulvinar tellus, a rutrum elit lectus et nisl. Aenean pulvinar lacus tellus, ac finibus dui suscipit at. Nunc bibendum pharetra magna, et consequat urna vestibulum vitae. Vivamus in nulla pulvinar, tempor lorem vel, condimentum massa. Cras fermentum quam finibus dui fringilla, eget luctus sem vehicula. Fusce maximus massa sit amet diam tincidunt, vel feugiat quam venenatis. Cras bibendum turpis vel est ornare venenatis. Donec hendrerit rhoncus erat in vestibulum. Nam hendrerit, magna non imperdiet semper, nisi risus tincidunt ligula, ac euismod libero enim ut massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin placerat ante bibendum libero consequat pulvinar.';
      this.model.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/product-2.jpg');
    }
  }
}
