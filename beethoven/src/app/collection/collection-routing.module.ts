import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionComponent } from './collection.component';

export const routes: Routes = [
    {
        path: ':id',
        component: CollectionComponent
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