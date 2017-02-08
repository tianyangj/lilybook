import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ComposerRoutingModule } from './composer-routing.module';

import { ComposerComponent } from './composer.component';

@NgModule({
  imports: [
    SharedModule,
    ComposerRoutingModule
  ],
  declarations: [
    ComposerComponent
  ]
})
export class ComposerModule { }
