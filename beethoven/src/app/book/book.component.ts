import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdSidenav } from '@angular/material'

@Component({
  selector: 'lb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @ViewChild(MdSidenav) sidenav: MdSidenav;
  book;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.do(data => {
      console.log('book', data['book']);
    }).subscribe(data => this.book = data['book']);
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
