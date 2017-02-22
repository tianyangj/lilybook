import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeResolveService } from './services/home-resolve.service';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            collections: HomeResolveService
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
export class HomeRoutingModule { }