import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'lb-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  composers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) { }

  ngOnInit() {
    this.composers = this.angularFire.database.list('/composers');
  }

}
