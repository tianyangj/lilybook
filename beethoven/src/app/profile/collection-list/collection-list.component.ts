import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lb-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionListComponent implements OnInit {

  @Input() collections;

  constructor() { }

  ngOnInit() {
  }

}
