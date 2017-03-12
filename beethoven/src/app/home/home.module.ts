import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { CollectionListItemComponent } from './collection-list-item/collection-list-item.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    CollectionListItemComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
