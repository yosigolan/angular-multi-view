import { NgModule } from '@angular/core';
import { ApplicationStateService } from '../services/application-state-service/applicationState.service';

/**
 * this module include services that must be singeltons. it should only be included in the app module
 * in order to work like that. see here for more info under core module:
 * https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-module-for-root
 */
@NgModule({
  imports:   [],
  providers: [
    ApplicationStateService
  ]
})
export class CoreModule {
}
