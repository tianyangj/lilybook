import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionResolveService } from './services/collection-resolve.service';
import { CollectionComponent } from './collection.component';

export const routes: Routes = [
    {
        path: ':id',
        component: CollectionComponent,
        resolve: {
            collection: CollectionResolveService
        }
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CollectionRoutingModule { }