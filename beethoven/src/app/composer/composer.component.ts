import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Composer } from '../core/models';

@Component({
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit {

  composer: Composer;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.composer = data['composer'];
    });
  }

}
