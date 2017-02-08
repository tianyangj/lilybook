import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComposerResolveService } from './services/composer-resolve.service';
import { ComposerListResolveService } from './services/composer-list-resolve.service';
import { ComposerComponent } from './composer.component';
import { ComposerListComponent } from './composer-list/composer-list.component';

export const routes: Routes = [
    {
        path: 'all',
        component: ComposerListComponent,
        resolve: {
            composers: ComposerListResolveService
        }
    },
    {
        path: ':composerId',
        component: ComposerComponent,
        resolve: {
            composer: ComposerResolveService
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
export class ComposerRoutingModule { }