import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { DataService } from '../../core/data.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    model = {
        email: '',
        password: ''
    };
    error: any;

    constructor(
        private dataService: DataService,
        private dialogRef: MdDialogRef<LoginComponent>
    ) { }

    ngOnInit() {
    }

    login() {
        this.error = null;
        this.dataService.login({
            email: this.model.email,
            password: this.model.password
        }).then((authState) => {
            this.dialogRef.close(authState);
        }, (error) => {
            this.error = error;
        });
    }

}
