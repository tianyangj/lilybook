import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/* Routing Component */
@Component({
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collection;
  compositions;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.switchMap(data => {
      this.collection = data['collection'];
      return Observable.combineLatest(this.collection.compositions$.slice(0, 24));
    }).subscribe(compositions => {
      this.compositions = compositions;
    });
  }

}
