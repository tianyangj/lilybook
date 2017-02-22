import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeResolveService } from './services/home-resolve.service';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeResolveService
  ]
})
export class HomeModule { }
