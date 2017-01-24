import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.scss']
})
export class CompositionComponent implements OnInit {

  composition;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.do(data => {
      console.log(data['composition']);
    }).subscribe(data => this.composition = data['composition']);
  }

}
