import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  back() {
    this.router.navigate([{
      outlets: { popup: null }
    }]);
  }

}
