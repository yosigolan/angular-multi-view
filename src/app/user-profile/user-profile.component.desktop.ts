import { Component, EventEmitter, Output } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';
import { UserProfileComponent } from './user-profile.component';

@Component({
  selector:    'app-user-profile-desktop',
  templateUrl: './user-profile.component.desktop.html',
  styleUrls:   ['./user-profile.component.desktop.scss']
})
export class UserProfileComponentDesktop extends UserProfileComponent {

  constructor(applicationStateService: ApplicationStateService) {
    super(applicationStateService);
  }

}
