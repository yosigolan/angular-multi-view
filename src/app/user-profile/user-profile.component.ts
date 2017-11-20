import {Component, EventEmitter, Output} from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  public isMobileResolution: boolean;

  @Output() public closeUserProfileEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private applicationStateService: ApplicationStateService) {
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
  }

  public close(): void {
    this.closeUserProfileEvent.emit();
  }
}
