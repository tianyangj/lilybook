import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lb-library-list-item',
  templateUrl: './library-list-item.component.html',
  styleUrls: ['./library-list-item.component.scss']
})
export class LibraryListItemComponent implements OnInit {

  @Input() composition;

  constructor() { }

  ngOnInit() {
  }

}
