import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../../core/models';

@Component({
  selector: 'lb-chip-form',
  templateUrl: './chip-form.component.html',
  styleUrls: ['./chip-form.component.scss']
})
export class ChipFormComponent implements OnInit {

  @Input() form: Form;

  constructor() { }

  ngOnInit() {
  }

}
