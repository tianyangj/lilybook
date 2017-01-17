import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutDefaultComponent } from './core/layout-default/layout-default.component';
import { LayoutEmptyComponent } from './core/layout-empty/layout-empty.component';
import { SplashComponent } from './splash/splash.component';

export const layoutDefaultRoutes: Routes = [
    { path: 'collection', loadChildren: './collection/collection.module#CollectionModule' },
    { path: 'composition', loadChildren: './composition/composition.module#CompositionModule' }
];

export const layoutEmptyRoutes: Routes = [
    { path: '', component: SplashComponent },
    { path: 'book', loadChildren: './book/book.module#BookModule' }
];

export const routes: Routes = [
    { path: '', component: LayoutEmptyComponent, children: layoutEmptyRoutes },
    { path: '', component: LayoutDefaultComponent, children: layoutDefaultRoutes }
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