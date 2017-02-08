import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ComposerRoutingModule } from './composer-routing.module';

import { ComposerResolveService } from './services/composer-resolve.service';
import { ComposerListResolveService } from './services/composer-list-resolve.service';
import { ComposerComponent } from './composer.component';
import { ComposerListComponent } from './composer-list/composer-list.component';

@NgModule({
  imports: [
    SharedModule,
    ComposerRoutingModule
  ],
  declarations: [
    ComposerComponent,
    ComposerListComponent
  ],
  providers: [
    ComposerResolveService,
    ComposerListResolveService
  ]
})
export class ComposerModule { }
