import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AppService } from '../../core/app.service';

@Component({
  selector: 'lb-more-icon',
  templateUrl: './more-icon.component.html',
  styleUrls: ['./more-icon.component.scss']
})
export class MoreIconComponent implements OnInit {

  authenticated = false;

  constructor(
    private angularFire: AngularFire,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.angularFire.auth.subscribe(authState => {
      this.authenticated = !!authState;
    });
  }

  login() {
    this.appService.login();
  }

  logout() {
    this.appService.logout();
  }
}
