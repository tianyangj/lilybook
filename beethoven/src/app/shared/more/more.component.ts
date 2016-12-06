import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";
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
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.auth().subscribe((authState: FirebaseAuthState) => {
      this.authenticated = !!authState;
    });
  }

  login() {
    this.mdDialog.open(LoginComponent);
  }

  logout() {
    this.dataService.logout();
  }

}
