import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onMenuToggle = new EventEmitter();
  @Output() onLibraryToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.onMenuToggle.emit();
  }

  toggleLibrary() {
    this.onLibraryToggle.emit();
  }

}
