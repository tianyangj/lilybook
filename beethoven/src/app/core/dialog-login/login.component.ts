import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { AngularFire } from 'angularfire2';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class DialogLoginComponent implements OnInit {

    loginForm: FormGroup;
    error: any;

    constructor(
        private angularFire: AngularFire,
        private formBuilder: FormBuilder,
        private dialogRef: MdDialogRef<DialogLoginComponent>
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    login() {
        if (this.loginForm.valid) {
            this.error = null;
            this.angularFire.auth.login({
                email: this.loginForm.value.email,
                password: this.loginForm.value.password
            }).then(authState => {
                this.dialogRef.close(authState);
            }, error => {
                this.error = error;
            });
        }
    }

}
