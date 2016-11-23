import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CollectionRoutingModule } from './collection-routing.module';

import { CollectionResolveService } from './services/collection-resolve.service';
import { CollectionComponent } from './collection.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        SharedModule,
        CollectionRoutingModule
    ],
    declarations: [
        CollectionComponent,
        HeaderComponent
    ],
    providers: [
        CollectionResolveService
    ]
})
export class CollectionModule { }
