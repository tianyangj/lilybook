import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/data.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collections;
  user;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.collections = data['collections'];
    });
    this.dataService.auth().subscribe(authState => {
      this.user = authState;
    })
  }

  delete(collection, composition$) {
    composition$.subscribe(composition => {
      this.dataService.removeUserCollection(this.user.uid, collection.id, composition.$key);
    })
  }

}
