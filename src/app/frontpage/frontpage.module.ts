import {DesktopFrontpageComponent} from './desktop/desktop-frontpage.component';
import {MobileFrontpageComponent} from './mobile/mobile-frontpage.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
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
