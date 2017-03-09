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
      this.collections.forEach(collection => {
        Observable.combineLatest(collection.compositions$).subscribe(compositions => {
          collection.compositions = compositions;
        });
      });
    });
  }

  delete(collection, composition) {
    console.log('to delete', collection, composition);
    this.dataService.removeUserLibrary(collection, composition).subscribe(x => console.log(x));
  }

}
