import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material/sidenav';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'lb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MdSidenav;

  composers: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.composers = af.database.list('composers');
  }

  onMenuToggle() {
    this.sidenav.toggle();
  }
}
