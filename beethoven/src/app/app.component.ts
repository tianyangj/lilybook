import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MdSidenav;

  title = 'app works!';

  onMenuToggle() {
    this.sidenav.toggle();
  }
}
