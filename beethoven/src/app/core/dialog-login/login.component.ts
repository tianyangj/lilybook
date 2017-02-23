import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { AngularFire } from 'angularfire2';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class DialogLoginComponent implements OnInit {

    model = {
        email: '',
        password: ''
    };
    error: any;

    constructor(
        private angularFire: AngularFire,
        private dialogRef: MdDialogRef<DialogLoginComponent>
    ) { }

    ngOnInit() {
    }

    login() {
        this.error = null;
        this.angularFire.auth.login(this.model).then(authState => {
            this.dialogRef.close(authState);
        }, (error) => {
            this.error = error;
        });
    }

}
