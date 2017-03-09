import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Rcm, Abrsm, Henle } from '../../core/models';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'lb-chip-level',
  templateUrl: './chip-level.component.html',
  styleUrls: ['./chip-level.component.scss']
})
export class ChipLevelComponent implements OnInit, OnChanges {

  @Input() rcm: Rcm;
  @Input() abrsm: Abrsm;
  @Input() henle: Henle;
  showRcmLink = false;
  showAbrsmLink = false;
  showHenleLink = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.rcm) {
      this.dataService.hasCollection(this.rcm.$key).subscribe(showRcmLink => {
        this.showRcmLink = showRcmLink;
      });
    }
    if (this.abrsm) {
      this.dataService.hasCollection(this.abrsm.$key).subscribe(showAbrsmLink => {
        this.showAbrsmLink = showAbrsmLink;
      });
    }
    if (this.henle) {
      this.dataService.hasCollection(this.henle.$key).subscribe(showHenleLink => {
        this.showHenleLink = showHenleLink;
      });
    }
  }

}
