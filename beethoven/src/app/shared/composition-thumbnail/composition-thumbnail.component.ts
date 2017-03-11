import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Composition } from '../../core/models';

@Component({
  selector: 'lb-composition-thumbnail',
  templateUrl: './composition-thumbnail.component.html',
  styleUrls: ['./composition-thumbnail.component.scss']
})
export class CompositionThumbnailComponent implements OnInit, OnChanges {

  @Input() composition: Composition;
  @Input() popup = false;
  link: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.composition) {
      this.link = `/composition/${this.composition.$key}`;
    }
  }

  go(composition, $event) {
    $event.stopPropagation();
    $event.preventDefault();
    if (this.popup) {
      this.router.navigate([{
        outlets: { popup: ['composition', composition.$key] }
      }]);
    } else {
      this.router.navigate(['/composition', composition.$key]);
    }
  }

}
