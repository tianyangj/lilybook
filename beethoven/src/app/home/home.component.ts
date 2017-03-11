import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../core/data.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collections;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.collections = data['collections'];
    });
  }

  delete(collectionId, compositionId) {
    this.dataService.removeUserLibrary(collectionId, compositionId).subscribe(collections => {
      this.collections = collections;
    });
  }

}
