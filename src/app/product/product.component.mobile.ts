import {AfterViewInit, Component} from '@angular/core';
import {ProductComponentModel} from './product.component.model';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { ApplicationStateService } from '../application-state.service';
import { ProductComponent } from './product.component';

@Component({
  selector: 'app-product-mobile',
  templateUrl: './product.component.mobile.html',
  styleUrls: ['./product.component.mobile.scss']
})
export class ProductComponentMobile extends ProductComponent {

  constructor(router: Router,
    sanitizer: DomSanitizer) {
    super(router,sanitizer);
   }

}
