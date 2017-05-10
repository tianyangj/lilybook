import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private router: Router,
    private angularFire: AngularFire,
    private formBuilder: FormBuilder,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      displayName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signup() {
    if (this.signupForm.valid) {
      this.angularFire.auth.createUser({
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      }).then(authState => {
        return authState.auth.updateProfile({
          displayName: this.signupForm.value.displayName,
          photoURL: ''
        });
      }).then(() => {
        this.snackBar.open(`Welcome, ${this.signupForm.value.displayName}! Your account has been created.`, 'OK', {
          duration: 5000
        });
        this.router.navigate(['/home']);
      });
    }
  }
}