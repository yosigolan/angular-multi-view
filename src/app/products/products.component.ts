import {Component, OnInit} from '@angular/core';
import {ProductsComponentModel} from './products.component.model';
import {Product} from './product/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private model: ProductsComponentModel;
  public myViewModel: ProductsComponentModel;

  private readonly amountOfProductsToDisplay: number;

  constructor() {
    this.model = new ProductsComponentModel();
    this.myViewModel = new ProductsComponentModel();

    this.amountOfProductsToDisplay = 50;
  }

  public ngOnInit(): void {
    for (let productCounter = 1; productCounter <= this.amountOfProductsToDisplay; productCounter++) {
      let product: Product = new Product();

      product.id = productCounter.toString();
      product.title = `Product #${productCounter}`;
      product.description = `Description of product number ${productCounter}`;

      this.model.products.push(product);
    }

    this.model.products[1].title = 'Song #2';

    this.updateView();
  }

  private updateView(): void {
    this.myViewModel = this.model.clone();
  }

}
