import { AfterViewInit, Component } from '@angular/core';
import { ProductComponentModel } from './product.component.model';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ApplicationStateService } from '../application-state.service';
import { ProductComponent } from './product.component';

@Component({
  selector:    'app-product-desktop',
  templateUrl: './product.component.desktop.html',
  styleUrls:   ['./product.component.desktop.scss']
})
export class ProductComponentDesktop extends ProductComponent {

  constructor(router: Router,
    sanitizer: DomSanitizer) {
    super(router, sanitizer);
  }

}
