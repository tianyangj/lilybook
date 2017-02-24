import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../core/data.service';

@Component({
  selector: 'lb-chip-composer',
  templateUrl: './chip-composer.component.html',
  styleUrls: ['./chip-composer.component.scss']
})
export class ChipComposerComponent implements OnInit {

  @Input() composerId: string;
  @Input() fullname: boolean;

  composer$;
  composerLink: boolean;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    if (this.composerId) {
      this.composer$ = this.dataService.getComposer(this.composerId);
      this.dataService.hasComposerCollection(this.composerId).subscribe(composerLink => this.composerLink = composerLink);
    }
  }

}
