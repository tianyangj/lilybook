import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './profile-collection.component.html',
  styleUrls: ['./profile-collection.component.scss']
})
export class ProfileCollectionComponent implements OnInit {

  collections;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.collections = data.profile.collections;
    });
  }

}
