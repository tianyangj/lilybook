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

  rcm;
  abrsm;
  henle;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    if (this.rcmId) {
      this.dataService.getRcm(this.rcmId).subscribe(rcm => this.rcm = rcm);
    }
    if (this.abrsmId) {
      this.dataService.getAbrsm(this.abrsmId).subscribe(abrsm => this.abrsm = abrsm);
    }
    if (this.henleId) {
      this.dataService.getHenle(this.henleId).subscribe(henle => this.henle = henle);
    }
  }

}
