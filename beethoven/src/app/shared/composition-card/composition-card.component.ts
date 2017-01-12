import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lb-composition-card',
  templateUrl: './composition-card.component.html',
  styleUrls: ['./composition-card.component.scss']
})
export class CompositionCardComponent implements OnInit {

  @Input('composition') compositionSource: any;

  composition;

  constructor() { }

  ngOnInit() {
    if (this.compositionSource instanceof Observable) {
      this.compositionSource.subscribe(composition => this.composition = composition);
    } else {
      this.composition = this.compositionSource;
    }
  }

}
