import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutDefaultComponent } from './core/layout-default/layout-default.component';
import { LayoutPopupComponent } from './core/layout-popup/layout-popup.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { SplashComponent } from './splash/splash.component';

export const featureRoutes: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
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
    },
    {
        path: 'signup',
        loadChildren: './signup/signup.module#SignupModule'
    }
];

export const rootRoutes: Routes = [
    {
        path: 'composition',
        outlet: 'popup',
        component: LayoutPopupComponent,
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
        path: 'profile/:vanity',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: '',
        component: LayoutDefaultComponent,
        children: featureRoutes
    },
    {
        path: '**',
        component: PageNotFoundComponent
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