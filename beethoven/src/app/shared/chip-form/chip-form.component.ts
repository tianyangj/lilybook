import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../core/data.service';

@Component({
  selector: 'lb-chip-form',
  templateUrl: './chip-form.component.html',
  styleUrls: ['./chip-form.component.scss']
})
export class ChipFormComponent implements OnInit {

  @Input() formId: string;

  form$;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    if (this.formId) {
      this.form$ = this.dataService.getForm(this.formId);
    }
  }

}
