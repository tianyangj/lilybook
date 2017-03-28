import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './profile-book.component.html',
  styleUrls: ['./profile-book.component.scss']
})
export class ProfileBookComponent implements OnInit {

  collection;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    Observable.combineLatest(
      this.route.params,
      this.route.parent.data
    ).subscribe(([params, data]) => {
      this.collection = data.profile.collections.find(collection => collection.$key === params.collectionId);
      console.log(this.collection);
    });
  }

}
