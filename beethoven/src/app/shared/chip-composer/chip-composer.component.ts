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

  composer;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getComposer(this.composerId).subscribe(composer => this.composer = composer);
  }

}
