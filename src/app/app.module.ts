import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppBrowserRoutingModule} from './app.routing.module';
import {FrontPageModule} from './frontpage/frontpage.module';
import {AboutComponent} from './about/about.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CoreModule} from './core.module';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserProfileComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppBrowserRoutingModule,
    FrontPageModule
  ],
  entryComponents: [
    UserProfileComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
