import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lb-book-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() bookName: string;
  @Output() toggleSidenav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleSidenav.emit();
  }

}
