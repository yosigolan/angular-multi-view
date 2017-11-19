import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @HostBinding('@routeAnimation') private routeAnimation = true;
  @HostBinding('style.display') private display = 'block';
  @HostBinding('style.position') private position = 'absolute';

  constructor() {
  }

  public ngOnInit(): void {
  }

}
