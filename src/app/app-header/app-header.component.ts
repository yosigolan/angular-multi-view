import {Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { ApplicationStateService } from '../application-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
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
export class AppHeaderComponent {
  public isMobileResolution: boolean;
  public isToShowUserProfile: boolean;

  constructor(private applicationStateService: ApplicationStateService,private router: Router) {
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
    this.isToShowUserProfile = false;
  }

  public onUserProfileClick(): void {
    if (!this.isMobileResolution) {
      if (this.isToShowUserProfile) {
        this.isToShowUserProfile = false;
      } else {
        this.isToShowUserProfile = true;
      }
    } else {
      this.router.navigate(['/user-profile']);
    }

  }

}
