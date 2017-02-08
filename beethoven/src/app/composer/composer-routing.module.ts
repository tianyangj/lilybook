import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComposerComponent } from './composer.component';

export const routes: Routes = [
    {
        path: ':composerId',
        component: ComposerComponent
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
export class ComposerRoutingModule { }