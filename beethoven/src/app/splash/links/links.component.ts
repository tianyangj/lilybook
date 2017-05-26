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
      { color: 'accent', icon: 'face', link: '/collection/lucas', name: 'Lucas Jiang' },
      { color: 'accent', icon: 'whatshot', link: '/profile/tianyangj', name: 'Tommy Jiang' },
      { color: 'primary', icon: 'person', link: '/composer/bach', name: 'J.S. Bach' },
      { color: 'primary', icon: 'person', link: '/composer/beethoven', name: 'Beethoven' },
      { color: 'primary', icon: 'person', link: '/composer/mozart', name: 'Mozart' },
      { color: 'primary', icon: 'collections', link: '/collection/rcm-piano-1', name: 'RCM Grade 1' },
      { color: 'primary', icon: 'collections', link: '/collection/rcm-piano-2', name: 'RCM Grade 2' },
      { color: 'primary', icon: 'book', link: '/book/rcm-piano-1', name: 'RCM Grade 1 Book' },
      { color: 'primary', icon: 'book', link: '/book/rcm-piano-2', name: 'RCM Grade 2 Book' }
    ]
  }

}
