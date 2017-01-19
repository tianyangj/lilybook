import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lb-collection-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collection: any;
  composerIds;

  constructor() { }

  ngOnInit() {
    this.composerIds = this.collection.compositions.map(composition => {
      return composition.composerId;
    }).filter((composerId, index, composerIds) => {
      return composerIds.indexOf(composerId) === index;
    });
  }

}
