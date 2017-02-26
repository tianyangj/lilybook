import { Component, OnInit, Input } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import { Rcm, Abrsm, Henle } from '../../core/models';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'lb-chip-level',
  templateUrl: './chip-level.component.html',
  styleUrls: ['./chip-level.component.scss']
})
export class ChipLevelComponent implements OnInit {

  @Input('rcm') rcmObservable: FirebaseObjectObservable<Rcm>;
  @Input('abrsm') abrsmObservable: FirebaseObjectObservable<Abrsm>;
  @Input('henle') henleObservable: FirebaseObjectObservable<Henle>;
  rcm: Rcm;
  abrsm: Abrsm;
  henle: Henle;
  showRcmLink = false;
  showAbrsmLink = false;
  showHenleLink = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    if (this.rcmObservable) {
      this.rcmObservable.switchMap((rcm: Rcm) => {
        this.rcm = rcm;
        return this.dataService.hasCollection(rcm.$key);
      }).subscribe(hasRcmLink => {
        this.showRcmLink = hasRcmLink;
      });
    }
    if (this.abrsmObservable) {
      this.abrsmObservable.switchMap((abrsm: Abrsm) => {
        this.abrsm = abrsm;
        return this.dataService.hasCollection(abrsm.$key);
      }).subscribe(hasAbrsmLink => {
        this.showAbrsmLink = hasAbrsmLink;
      });
    }
    if (this.henleObservable) {
      this.henleObservable.switchMap((henle: Henle) => {
        this.henle = henle;
        return this.dataService.hasCollection(henle.$key);
      }).subscribe(showHenleLink => {
        this.showHenleLink = showHenleLink;
      });
    }
  }

}
