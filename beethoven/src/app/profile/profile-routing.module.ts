import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileResolveService } from './services/profile-resolve.service';
import { ProfileComponent } from './profile.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolveService
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
export class ProfileRoutingModule { }