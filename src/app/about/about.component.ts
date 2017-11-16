import { Component } from '@angular/core';
import { AboutComponentModel } from './about.component.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AboutComponent {

  private model: AboutComponentModel;
  public myViewModel: AboutComponentModel;

  constructor() {
    this.model = new AboutComponentModel();
    this.model.title = 'my first multi view app';
    this.updateView();
  }

  private updateView(): void {
    this.myViewModel = this.model.clone();
  }
}
