import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'lb-composition-card',
  templateUrl: './composition-card.component.html',
  styleUrls: ['./composition-card.component.scss']
})
export class CompositionCardComponent implements OnInit {

  @Input() composition: Observable<any>;

  composer: Observable<any>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.composer = this.composition.switchMap(composition => {
      return this.dataService.getComposer(composition.composerId);
    });
  }

}
