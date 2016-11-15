import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SplashRoutingModule } from './splash-routing.module';

import { SplashComponent } from './splash.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    SharedModule,
    SplashRoutingModule
  ],
  declarations: [
    SplashComponent,
    HeaderComponent,
    HeroComponent,
    SearchComponent
  ]
})
export class SplashModule { }
