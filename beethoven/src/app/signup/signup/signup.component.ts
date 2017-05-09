import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import { DataService } from '../../core/data.service';

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
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      username: ['', [Validators.required], [this.usernameValidator.bind(this)]]
    });
  }

  signup() {
    console.log('signup', this.signupForm.value);
    if (this.signupForm.valid) {
      this.angularFire.auth.createUser({
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      }).then(authState => {
        return authState.auth.updateProfile({
          displayName: this.signupForm.value.name,
          photoURL: ''
        }).then(() => {
          return authState;
        });
      }).then(authState => {
        return this.dataService.setVanity(this.signupForm.value.username, authState.uid);
      }).then(() => {
        this.router.navigate(['/home']);
      });
    }
  }

  private usernameValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.dataService.hasVanity(control.value)
      .map((taken: boolean) => taken ? { 'taken': true } : null)
      .debounceTime(300)
      .first();
  }
}