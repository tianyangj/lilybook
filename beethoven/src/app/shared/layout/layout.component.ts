import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lb-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('lb-layout.ngOnInit')
  }

}
