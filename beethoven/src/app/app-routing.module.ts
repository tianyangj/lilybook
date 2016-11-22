import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './splash/splash.component';

export const routes: Routes = [
    { path: '', component: SplashComponent },
    { path: 'collection', loadChildren: 'app/collection/collection.module#CollectionModule' },
    { path: 'composition', loadChildren: 'app/composition/composition.module#CompositionModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }