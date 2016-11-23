import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lb-collection-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collectionName: string;

  constructor() { }

  ngOnInit() {
  }

}
