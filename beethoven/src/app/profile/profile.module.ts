import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileResolveService } from './services/profile-resolve.service';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
    ProfileResolveService
  ]
})
export class ProfileModule { }
