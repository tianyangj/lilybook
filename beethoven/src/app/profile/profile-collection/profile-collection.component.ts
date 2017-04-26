import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileViewService } from '../services/profile-view.service';

@Component({
  templateUrl: './profile-collection.component.html',
  styleUrls: ['./profile-collection.component.scss']
})
export class ProfileCollectionComponent implements OnInit {

  collections;

  constructor(
    private route: ActivatedRoute,
    private viewService: ProfileViewService
  ) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.viewService.setActiveCollection(null);
      this.collections = data.profile.collections;
    });
  }

}
