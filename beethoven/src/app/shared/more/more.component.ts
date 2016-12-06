import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from "@angular/material";
import { FirebaseAuthState } from 'angularfire2'

import { LoginComponent } from '../login/login.component';
import { DataService } from '../../core/data.service';

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
        this.mdDialog.open(LoginComponent).afterClosed().subscribe(authState => {
            this.mdSnackBar.open('You are logged in.', 'OK');
        });
    }

    logout() {
        this.dataService.logout();
        this.mdSnackBar.open('You are logged out.', 'OK');
    }

    signup() {
        console.log('signup...');
    }

}
