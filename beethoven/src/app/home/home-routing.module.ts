import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberGuard } from '../core/services/member-guard.service';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    {
        path: '',
        canActivate: [MemberGuard],
        component: HomeComponent
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