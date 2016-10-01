import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'lb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MdSidenav;

  onMenuToggle() {
    this.sidenav.toggle();
  }
}
