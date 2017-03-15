import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lb-splash-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  links;

  constructor() { }

  ngOnInit() {
    this.links = [
      { link: '/composer/bach', name: 'J.S. Bach' },
      { link: '/composer/beethoven', name: 'Beethoven' },
      { link: '/composer/mozart', name: 'Mozart' },
      { link: '/collection/rcm-piano-1', name: 'RCM Grade 1' },
      { link: '/collection/rcm-piano-2', name: 'RCM Grade 2' }
    ]
  }

}
