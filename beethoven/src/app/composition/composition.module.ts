import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { routes } from './composition.routes';
import { CompositionComponent } from './composition.component';
import { CompositionHeroComponent } from './composition-hero/composition-hero.component';
import { CompositionDetailComponent } from './composition-detail/composition-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    CompositionComponent,
    CompositionHeroComponent,
    CompositionDetailComponent
  ]
})
export class CompositionModule { }
