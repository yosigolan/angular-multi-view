import {DesktopFrontpageComponent} from './desktop/desktop-frontpage.component';
import {MobileFrontpageComponent} from './mobile/mobile-frontpage.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DesktopFrontpageComponent,
    MobileFrontpageComponent
  ],
  entryComponents: [
    DesktopFrontpageComponent,
    MobileFrontpageComponent
  ]
})
export class FrontPageModule {
}
