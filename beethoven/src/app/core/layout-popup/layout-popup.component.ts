import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  templateUrl: './layout-popup.component.html',
  styleUrls: ['./layout-popup.component.scss']
})
export class LayoutPopupComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate([{
      outlets: { popup: null }
    }]);
  }

}
