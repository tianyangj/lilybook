import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../core/data.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile;
  collections;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.filter(params => {
      return params.vanity;
    }).switchMap(params => {
      return this.dataService.getUserProfile(params.vanity);
    }).subscribe(({ profile, collections }) => {
      console.log(profile, collections);
      this.profile = profile;
      this.collections = collections;
    });
  }

}
