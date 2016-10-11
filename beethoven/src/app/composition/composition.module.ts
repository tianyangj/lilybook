import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { routes } from './composition.routes';
import { CompositionComponent } from './composition.component';
import { CompositionHeroComponent } from './composition-hero/composition-hero.component';
import { CompositionDetailComponent } from './composition-detail/composition-detail.component';

import { CompositionResolveService } from './guards/composition-resolve.service';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    CompositionComponent,
    CompositionHeroComponent,
    CompositionDetailComponent
  ],
  providers: [
    CompositionResolveService
  ]
})
export class CompositionModule { }
