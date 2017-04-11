import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lb-profile-sidenav',
  templateUrl: './profile-sidenav.component.html',
  styleUrls: ['./profile-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSidenavComponent implements OnInit {

  @Input() user;
  @Input() collections;

  constructor() { }

  ngOnInit() {
  }

}
