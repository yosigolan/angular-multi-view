import { Component } from '@angular/core';
import { ProductAComponentModel } from './producta.component.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ProductAComponent {

  private model: ProductAComponentModel;
  public myViewModel: ProductAComponentModel;

  constructor() {
    this.model = new ProductAComponentModel();
    this.myViewModel = new ProductAComponentModel();
    this.model.title = 'my first multi view app';
    this.updateView();
  }

  private updateView(): void {
    this.myViewModel = this.model.clone();
  }
}
