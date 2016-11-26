import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lb-composition-card',
  templateUrl: './composition-card.component.html',
  styleUrls: ['./composition-card.component.scss']
})
export class CompositionCardComponent implements OnInit {

  @Input('composition') compositionSource: Observable<any>;

  composition;

  constructor() { }

  ngOnInit() {
    this.compositionSource.subscribe(composition => this.composition = composition);
  }

}
