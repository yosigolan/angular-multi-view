import {Component} from '@angular/core';
import {AppComponentModel} from './app.component.model';
import {animate, style, transition, trigger} from '@angular/animations';
import { ApplicationStateService } from './application-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('userProfileAnimation', [
      transition('void => *', [
        style({opacity: 0, marginTop: 500}),
        animate('200ms ease-in', style({opacity: 1, marginTop: 50}))
      ]),
      transition('* => void', [
        animate('150ms ease-out', style({opacity: 0, marginTop: 500}))
      ])
    ])
  ]
})
export class AppComponent {

  public myViewModel: AppComponentModel;
  public isMobileResolution: boolean;
  private model: AppComponentModel;

  constructor(private applicationStateService: ApplicationStateService) {
    this.model = new AppComponentModel();
    this.myViewModel = new AppComponentModel();

    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
  }

  public onUserProfileClick(): void {
    if (this.model.isToShowUserProfile) {
      this.model.isToShowUserProfile = false;
    } else {
      this.model.isToShowUserProfile = true;
    }

    this.updateView();
  }

  private updateView(): void {
    this.myViewModel = this.model.clone();
  }
}
