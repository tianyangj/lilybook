import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material'

@Component({
  selector: 'lb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
