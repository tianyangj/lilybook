import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { AngularFire } from 'angularfire2';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class DialogSignupComponent implements OnInit {

  model = {
    email: '',
    password: '',
    displayName: ''
  };
  error: any;

  constructor(
    private angularFire: AngularFire,
    private dialogRef: MdDialogRef<DialogSignupComponent>
  ) { }

  ngOnInit() {
  }

  signup() {
    this.error = null;
    this.angularFire.auth.createUser({
      email: this.model.email,
      password: this.model.password
    }).then(authState => {
      authState.auth.updateProfile({
        displayName: this.model.displayName,
        photoURL: ''
      });
      this.dialogRef.close(authState);
    }, (error) => {
      this.error = error;
    });
  }

}
