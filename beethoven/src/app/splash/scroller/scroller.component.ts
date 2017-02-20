import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { DataService } from '../../core/data.service';

const IScroll = require('iscroll');

@Component({
  selector: 'lb-splash-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss']
})
export class ScrollerComponent implements OnInit {

  @ViewChild('scrollerContainer') scrollerContainer;
  @Input() collectionId: string;
  collection;
  scroller;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getCollection(this.collectionId, 10).subscribe(collection => {
      this.collection = collection;
      setTimeout(() => {
        this.scroller = new IScroll(this.scrollerContainer.nativeElement, {
          scrollX: true,
          scrollY: false,
          scrollbars: true,
          //fadeScrollbars: true,
          snap: 'li'
        });
      });
    });
  }

  prev() {
    this.scroller.prev();
  }

  next() {
    this.scroller.next();
  }

}
