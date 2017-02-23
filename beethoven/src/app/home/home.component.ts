import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { DataService } from '../core/data.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collections;
  authState;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private angularFire: AngularFire
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.collections = data['collections'];
    });
    this.angularFire.auth.subscribe(authState => {
      this.authState = authState;
    })
  }

  delete(collection, composition$) {
    composition$.subscribe(composition => {
      this.dataService.removeUserCollection(this.authState.uid, collection.id, composition.$key);
    })
  }

}
