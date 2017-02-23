import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../core/data.service';

@Component({
  selector: 'lb-chip-level',
  templateUrl: './chip-level.component.html',
  styleUrls: ['./chip-level.component.scss']
})
export class ChipLevelComponent implements OnInit {

  @Input() rcmId: string;
  @Input() abrsmId: string;
  @Input() henleId: string;

  rcm$;
  abrsm$;
  henle$;
  rcmLink: boolean;
  abrsmLink: boolean;
  henleLink: boolean;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    if (this.rcmId) {
      this.rcm$ = this.dataService.getRcm(this.rcmId);
      this.dataService.hasCollection(this.rcmId).subscribe(rcmLink => this.rcmLink = rcmLink);
    }
    if (this.abrsmId) {
      this.abrsm$ = this.dataService.getAbrsm(this.abrsmId);
      this.dataService.hasCollection(this.abrsmLink).subscribe(abrsmLink => this.abrsmLink = abrsmLink);
    }
    if (this.henleId) {
      this.henle$ = this.dataService.getHenle(this.henleId);
      this.dataService.hasCollection(this.henleLink).subscribe(henleLink => this.henleLink = henleLink);
    }
  }

}
