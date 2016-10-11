import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lb-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.scss']
})
export class CompositionComponent implements OnInit {

  composition;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(
  ) {
    this.route.data.subscribe(data => this.composition = data['composition']);
  }

}
