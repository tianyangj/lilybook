import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileResolveService } from './services/profile-resolve.service';
import { ProfileComponent } from './profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { CollectionListComponent } from './collection-list/collection-list.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent,
    ProfileHeaderComponent,
    CollectionListComponent
  ],
  providers: [
    ProfileResolveService
  ]
})
export class ProfileModule { }
