import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileResolveService } from './services/profile-resolve.service';
import { ProfileComponent } from './profile.component';
import { ProfileBookComponent } from './profile-book/profile-book.component';
import { ProfileCollectionComponent } from './profile-collection/profile-collection.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolveService
    },
    children: [
      {
        path: '',
        component: ProfileCollectionComponent
      },
      {
        path: ':collectionId',
        component: ProfileBookComponent
      }
    ]
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