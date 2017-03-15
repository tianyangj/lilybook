import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { AngularFire } from 'angularfire2';

import { DialogLoginComponent } from '../../core/dialog-login/login.component';
import { DialogSignupComponent } from '../../core/dialog-signup/signup.component';

@Component({
  selector: 'lb-more-icon',
  templateUrl: './more-icon.component.html',
  styleUrls: ['./more-icon.component.scss']
})
export class MoreIconComponent implements OnInit {

  authenticated = false;

  constructor(
    private mdDialog: MdDialog,
    private mdSnackBar: MdSnackBar,
    private angularFire: AngularFire
  ) { }

  ngOnInit() {
    this.angularFire.auth.subscribe(authState => {
      this.authenticated = !!authState;
    });
  }

  login() {
    this.mdDialog.open(DialogLoginComponent).afterClosed().subscribe(authState => {
      if (authState) {
        this.mdSnackBar.open('You have successfully logged in.', 'OK', { duration: 3000 });
      }
    });
  }

  logout() {
    this.angularFire.auth.logout().then(() => {
      this.mdSnackBar.open('You have successfully logged out.', 'OK', { duration: 3000 });
    });
  }

  signup() {
    this.mdDialog.open(DialogSignupComponent).afterClosed().subscribe(authState => {
      if (authState) {
        this.mdSnackBar.open('You have successfully signed up!', 'OK', { duration: 3000 });
      }
    });
  }

}
