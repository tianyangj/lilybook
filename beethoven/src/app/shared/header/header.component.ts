import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';

@Component({
  selector: 'lb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  viewProviders: [MdIconRegistry]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
