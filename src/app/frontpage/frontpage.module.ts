import {DesktopFrontpageComponent} from './desktop/desktop-frontpage.component';
import {MobileFrontpageComponent} from './mobile/mobile-frontpage.component';
import {NgModule} from '@angular/core';

@NgModule({
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
