declare var plyr: any;

import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'lb-composition-hero',
  templateUrl: './composition-hero.component.html',
  styleUrls: ['./composition-hero.component.scss']
})
export class CompositionHeroComponent implements AfterViewInit {

  @Input() hero;

  @ViewChild('videoEl') videoEl;

  constructor() { }

  ngAfterViewInit() {
    plyr.setup(this.videoEl.nativeElement, {
      iconUrl: '/assets/plyr.svg'
    });
  }

}
