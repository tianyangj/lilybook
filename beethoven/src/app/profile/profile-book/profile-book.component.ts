import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProfileViewService } from '../services/profile-view.service';

@Component({
  templateUrl: './profile-book.component.html',
  styleUrls: ['./profile-book.component.scss']
})
export class ProfileBookComponent implements OnInit {

  collection$;

  constructor(
    private route: ActivatedRoute,
    private viewService: ProfileViewService
  ) { }

  ngOnInit() {
    this.collection$ = Observable.combineLatest(
      this.route.params,
      this.route.parent.data
    ).map(([params, data]) => {
      const collection = data.profile.collections.find(collection => collection.$key === params.collectionId);
      this.viewService.setActiveCollection(collection);
      return collection;
    });
  }

}
