import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NonMemberGuard } from '../core/services/non-member-guard.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        canActivate: [NonMemberGuard],
        component: SignupComponent
      }
    ])
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule { }
