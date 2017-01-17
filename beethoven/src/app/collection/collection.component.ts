import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* Routing Component */
@Component({
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collection;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.collection = data['collection']);
  }

}
