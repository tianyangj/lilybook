import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { SplashComponent } from './splash.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
import { CollectionComponent } from './collection/collection.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SplashComponent,
    HeaderComponent,
    HeroComponent,
    SearchComponent,
    CollectionComponent,
    PopupComponent
  ]
})
export class SplashModule { }
