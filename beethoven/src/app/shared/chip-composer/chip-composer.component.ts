import { Component, OnInit, Input } from '@angular/core';
import { Composer } from '../../core/models';

@Component({
  selector: 'lb-chip-composer',
  templateUrl: './chip-composer.component.html',
  styleUrls: ['./chip-composer.component.scss']
})
export class ChipComposerComponent implements OnInit {

  @Input() composer: Composer;
  @Input() fullname: boolean;

  constructor() { }

  ngOnInit() {
  }

}
