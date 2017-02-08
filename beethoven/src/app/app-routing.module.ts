import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutDefaultComponent } from './core/layout-default/layout-default.component';
import { SplashComponent } from './splash/splash.component';
import { PopupComponent } from './splash/popup/popup.component';

export const featureRoutes: Routes = [
    {
        path: 'collection',
        loadChildren: './collection/collection.module#CollectionModule'
    },
    {
        path: 'composition',
        loadChildren: './composition/composition.module#CompositionModule'
    },
    {
        path: 'composer',
        loadChildren: './composer/composer.module#ComposerModule'
    }
];

export const rootRoutes: Routes = [
    {
        path: 'composition',
        outlet: 'popup',
        component: PopupComponent,
        children: [
            {
                path: '',
                loadChildren: './composition/composition.module#CompositionModule'
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        component: SplashComponent
    },
    {
        path: 'book',
        loadChildren: './book/book.module#BookModule'
    },
    {
        path: '',
        component: LayoutDefaultComponent,
        children: featureRoutes
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }