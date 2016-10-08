import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/data.service';

@Component({
  selector: 'lb-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.scss']
})
export class CompositionComponent implements OnInit {

  composition;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(
  ) {
    this.route.params.switchMap(param => {
      return this.dataService.getComposition(param['id']);
    }).subscribe(composition => {
      this.composition = composition;
    });
  }

}
