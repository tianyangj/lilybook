import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileResolveService } from './services/profile-resolve.service';
import { ProfileComponent } from './profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileBookComponent } from './profile-book/profile-book.component';
import { ProfileCollectionComponent } from './profile-collection/profile-collection.component';
import { ProfileSidenavComponent } from './profile-sidenav/profile-sidenav.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent,
    ProfileHeaderComponent,
    ProfileBookComponent,
    ProfileCollectionComponent,
    ProfileSidenavComponent
  ],
  providers: [
    ProfileResolveService
  ]
})
export class ProfileModule { }
