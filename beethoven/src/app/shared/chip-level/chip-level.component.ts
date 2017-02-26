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

  @Input() rcm: FirebaseObjectObservable<Rcm>;
  @Input() abrsm: FirebaseObjectObservable<Abrsm>;
  @Input() henle: FirebaseObjectObservable<Henle>;
  rcmId: string;
  abrsmId: string;
  henleId: string;
  showRcm = false;
  showAbrsm = false;
  showHenle = false;
  showRcmLink = false;
  showAbrsmLink = false;
  showHenleLink = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    if (this.rcm) {
      this.showRcm = true;
      this.rcm.switchMap((rcm: Rcm) => {
        this.rcmId = rcm.$key;
        return this.dataService.hasCollection(rcm.$key);
      }).subscribe(hasRcmLink => {
        this.showRcmLink = hasRcmLink;
      });
    }
    if (this.abrsm) {
      this.showAbrsm = true;
      this.abrsm.switchMap((abrsm: Abrsm) => {
        this.abrsmId = abrsm.$key;
        return this.dataService.hasCollection(abrsm.$key);
      }).subscribe(hasAbrsmLink => {
        this.showAbrsmLink = hasAbrsmLink;
      });
    }
    if (this.henle) {
      this.showHenle = true;
      this.henle.switchMap((henle: Henle) => {
        this.henleId = henle.$key;
        return this.dataService.hasCollection(henle.$key);
      }).subscribe(showHenleLink => {
        this.showHenleLink = showHenleLink;
      });
    }
  }

}
