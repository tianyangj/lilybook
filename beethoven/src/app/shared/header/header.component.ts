import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() onMenuToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.onMenuToggle.emit();
  }

}
