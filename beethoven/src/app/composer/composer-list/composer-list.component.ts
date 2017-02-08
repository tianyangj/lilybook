import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.scss']
})
export class ComposerListComponent implements OnInit {

  composers;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.composers = data['composers'];
    });
  }

}
