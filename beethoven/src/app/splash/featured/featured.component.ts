import { Component, OnInit } from '@angular/core';
import { Collection } from '../../core/models';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'lb-splash-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  collection: Collection;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getCollection('features').subscribe(collection => {
      this.collection = collection;
    });
  }

}
