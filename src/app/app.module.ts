import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app.routing.module';
import {AboutComponent} from './about/about.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CoreModule} from './core.module';
import {ProductComponent} from './product/product.component';
import {DesktopFrontpageComponent} from './frontpage/desktop/desktop-frontpage.component';
import {MobileFrontpageComponent} from './frontpage/mobile/mobile-frontpage.component';
import {MatTabsModule} from '@angular/material';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ProductComponentMobile } from './product/product.component.mobile';
import { ProductComponentDesktop } from './product/product.component.desktop';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserProfileComponent,
    ProductComponentDesktop,
    ProductComponentMobile,
    DesktopFrontpageComponent,
    MobileFrontpageComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    MatTabsModule
  ],
  entryComponents: [
    UserProfileComponent,
    MobileFrontpageComponent,
    ProductComponentMobile
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
