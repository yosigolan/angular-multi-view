import {Component, EventEmitter, Output} from '@angular/core';
import { ApplicationStateService } from '../application-state.service';
import { UserProfileComponent } from './user-profile.component';

@Component({
  selector: 'app-user-profile-mobile',
  templateUrl: './user-profile.component.mobile.html',
  styleUrls: ['./user-profile.component.mobile.scss']
})
export class UserProfileComponentMobile extends UserProfileComponent {

  constructor(applicationStateService: ApplicationStateService) {
    super(applicationStateService);
  }

}
