import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AppService } from '../../core/app.service';

@Component({
  selector: 'lb-splash-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authenticated: boolean;

  constructor(
    private angularFire: AngularFire,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.angularFire.auth.subscribe(authState => {
      this.authenticated = authState !== null;
    });
  }

  login() {
    this.appService.login();
  }

}
