import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lb-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.scss']
})
export class CompositionDetailComponent implements OnInit {

  @Input() composition;

  constructor() { }

  ngOnInit() {
  }

}
