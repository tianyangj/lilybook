import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CollectionRoutingModule } from './collection-routing.module';

import { CollectionComponent } from './collection.component';

@NgModule({
  imports: [
    SharedModule,
    CollectionRoutingModule
  ],
  declarations: [
    CollectionComponent
  ]
})
export class CollectionModule { }
