import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CompositionRoutingModule } from './composition-routing.module';

import { CompositionComponent } from './composition.component';
import { CompositionHeroComponent } from './composition-hero/composition-hero.component';
import { CompositionDetailComponent } from './composition-detail/composition-detail.component';

import { CompositionResolveService } from './guards/composition-resolve.service';
import { CompositionSheetComponent } from './composition-sheet/composition-sheet.component';
import { CompositionAddCollectionComponent } from './composition-add-collection/composition-add-collection.component';

@NgModule({
  imports: [
    SharedModule,
    CompositionRoutingModule
  ],
  declarations: [
    CompositionComponent,
    CompositionHeroComponent,
    CompositionDetailComponent,
    CompositionSheetComponent,
    CompositionAddCollectionComponent
  ],
  providers: [
    CompositionResolveService
  ]
})
export class CompositionModule { }
