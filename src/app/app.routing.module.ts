import {NgModule} from '@angular/core';
import {PreloadAllModules, Router, RouterModule, Routes} from '@angular/router';
import {DesktopFrontpageComponent} from './frontpage/desktop/desktop-frontpage.component';
import {AboutComponent} from './about/about.component';
import {MobileFrontpageComponent} from './frontpage/mobile/mobile-frontpage.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ApplicationStateService} from '../services/application-state-service/applicationState.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './products/product/product.component';

const desktop_routes: Routes = [
  {path: '', component: DesktopFrontpageComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

const mobile_routes: Routes = [
  {path: '', component: MobileFrontpageComponent},
  {path: 'products-mobile/:id', component: ProductComponent},
  {path: 'products-mobile', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  // as default we set the desktop routing configuration. if mobile will be started it will be replaced below.
  // note that we must specify some routes here (not an empty array) otherwise the trick below doesn't work...
  imports: [RouterModule.forRoot(desktop_routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppBrowserRoutingModule {

  public constructor(private router: Router, private applicationStateService: ApplicationStateService) {

    if (applicationStateService.getIsMobileResolution()) {
      router.resetConfig(mobile_routes);
    }
  }
}


