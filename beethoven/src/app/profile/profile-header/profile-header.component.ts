import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lb-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHeaderComponent implements OnInit {

  @Input() user;
  @Output() onMenuToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.onMenuToggle.emit();
  }

}
