import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompositionResolveService } from './guards/composition-resolve.service';
import { CompositionComponent } from './composition.component';

export const routes: Routes = [
    {
        path: ':id',
        component: CompositionComponent,
        resolve: {
            composition: CompositionResolveService
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
export class CompositionRoutingModule { }