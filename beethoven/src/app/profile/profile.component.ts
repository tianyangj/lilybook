import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../core/data.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
    }).subscribe(collections => {
      console.log(collections);
      this.collections = collections;
    });
  }

}
