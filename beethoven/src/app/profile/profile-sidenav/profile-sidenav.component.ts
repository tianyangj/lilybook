import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'lb-profile-sidenav',
  templateUrl: './profile-sidenav.component.html',
  styleUrls: ['./profile-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSidenavComponent implements OnInit {

  @Output() onSidenavClose = new EventEmitter();

  @Input() user;
  @Input() collections;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
        this.onSidenavClose.emit()
      });
  }

}
