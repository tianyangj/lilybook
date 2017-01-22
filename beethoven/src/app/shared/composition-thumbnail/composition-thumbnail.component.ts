import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lb-composition-thumbnail',
  templateUrl: './composition-thumbnail.component.html',
  styleUrls: ['./composition-thumbnail.component.scss']
})
export class CompositionThumbnailComponent implements OnInit {

  @Input('composition') composition: any;

  constructor() { }

  ngOnInit() {
  }

}
