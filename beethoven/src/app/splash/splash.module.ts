import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SplashRoutingModule } from './splash-routing.module';

import { SplashComponent } from './splash.component';

@NgModule({
  imports: [
    SharedModule,
    SplashRoutingModule
  ],
  declarations: [
    SplashComponent
  ]
})
export class SplashModule { }
