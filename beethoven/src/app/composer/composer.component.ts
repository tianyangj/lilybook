import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DataService } from '../core/data.service';

@Component({
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit {

  composer;
  compositions;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.data.switchMap(data => {
      this.composer = data['composer'];
      return this.dataService.getComposerCollection(this.composer.$key, 100)
    }).subscribe(collection => {
      this.compositions = collection.compositions;
    });
  }

}
