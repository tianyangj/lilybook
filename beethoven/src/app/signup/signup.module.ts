import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: SignupComponent }
    ])
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule { }
