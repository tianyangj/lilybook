import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from "@angular/material";
import { FirebaseAuthState } from 'angularfire2'

import { DialogLoginComponent } from '../../dialog-login/login.component';
import { DialogSignupComponent } from '../../dialog-signup/signup.component';
import { DataService } from '../../data.service';

@Component({
    selector: 'lb-more',
    templateUrl: './more.component.html',
    styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

    authenticated = false;

    constructor(
        private mdDialog: MdDialog,
        private mdSnackBar: MdSnackBar,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.dataService.auth().subscribe((authState: FirebaseAuthState) => {
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
        this.dataService.logout();
        this.mdSnackBar.open('You have successfully logged out.', 'OK', { duration: 3000 });
    }

    signup() {
        this.mdDialog.open(DialogSignupComponent).afterClosed().subscribe(authState => {
            if (authState) {
                this.mdSnackBar.open('You have successfully signed up!', 'OK', { duration: 3000 });
            }
        });
    }

}
