import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit {

  composer;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.composer = data['composer'];
    });
  }

}
