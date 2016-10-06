import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() onLinkClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.onLinkClose.emit();
  }

}
