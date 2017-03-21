import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Composition } from '../../core/models';

@Component({
  selector: 'lb-collection-list-item',
  templateUrl: './collection-list-item.component.html',
  styleUrls: ['./collection-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionListItemComponent implements OnInit {

  @Input() composition: Composition;
  @Input() position: number;
  @Input() first: boolean;
  @Input() last: boolean;
  @Output() onDelete = new EventEmitter<string>();
  @Output() onUp = new EventEmitter<string>();
  @Output() onDown = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.composition.$key);
  }

  up() {
    this.onUp.emit(this.composition.$key);
  }

  down() {
    this.onDown.emit(this.composition.$key);
  }

}
