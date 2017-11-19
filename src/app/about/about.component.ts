import {Component} from '@angular/core';
import {AboutComponentModel} from './about.component.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  private model: AboutComponentModel;
  public myViewModel: AboutComponentModel;

  constructor() {
    this.model = new AboutComponentModel();

    this.updateView();
  }

  private updateView(): void {
    this.myViewModel = this.model.clone();
  }
}
