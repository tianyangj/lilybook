import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'lb-composition-card',
  templateUrl: './composition-card.component.html',
  styleUrls: ['./composition-card.component.scss']
})
export class CompositionCardComponent implements OnInit {

  @Input('composition') compositionSource: Observable<any>;

  composition;
  composer;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.compositionSource.subscribe(composition => {
      this.composition = composition;
      this.dataService.getComposer(composition.composerId).subscribe(composer => {
        this.composer = composer
      });
    });
  }

}
