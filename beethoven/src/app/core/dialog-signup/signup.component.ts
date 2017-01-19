import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { DataService } from '../../core/data.service';

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
    private dataService: DataService,
    private dialogRef: MdDialogRef<DialogSignupComponent>
  ) { }

  ngOnInit() {
  }

  signup() {
    this.error = null;
    this.dataService.signup({
      email: this.model.email,
      password: this.model.password,
      displayName: this.model.displayName
    }).then((authState) => {
      this.dialogRef.close(authState);
    }, (error) => {
      this.error = error;
    });
  }

}
