import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../core/data.service';

@Component({
  selector: 'lb-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit {

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
