import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig } from "@angular/material";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'lb-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor(
    private mdDialog: MdDialog,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
  }

  openLogin() {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    this.mdDialog.open(LoginComponent, config);
  }

}
